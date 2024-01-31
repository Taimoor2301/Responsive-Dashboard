import { useState } from "react";
import { IoExit } from "react-icons/io5";
import {
  FaRegBell,
  FaBell,
  FaCirclePlay,
  FaRegCirclePlay,
} from "react-icons/fa6";
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiFileList2Fill, RiFileList2Line } from "react-icons/ri";
import { BsBarChart, BsBarChartFill } from "react-icons/bs";

export default function Sidebar() {
  const [notify, setNotify] = useState(false);
  const [active, setActive] = useState(0);
  const bell = notify ? <FaBell /> : <FaRegBell />;
  return (
    <div className="row-span-full col-span-1 xl:relative p-3 xl:block fixed bottom-0 w-screen xl:w-auto z-[1000000]">
      <div className="bg-i shadow-md shadow-i/50 text-white rounded-3xl h-full xl:w-2/3 xl:gap-16 gap-2 flex flex-row xl:flex-col items-center justify-between px-2 xl:py-8 py-2 text-2xl xl:text-3xl">
        <span
          onClick={() => setNotify(!notify)}
          className="relative cursor-pointer p-2 hover:bg-black/40 rounded-lg transition-all duration-300 ease-out"
        >
          {bell}{" "}
          <span className="xl:inline-block hidden h-1 rounded-lg w-14 top-[50px] left-[-5px] bg-white/40 absolute"></span>
        </span>
        <div className="flex flex-row xl:flex-col xl:gap-10 gap-2 items-center flex-1 justify-center xl:justify-start">
          {icons.map((Icon, index) => (
            <span
              className={`${
                active === index && "bg-black/40"
              } p-2 rounded-xl transition-all duration-300 ease-out hover:bg-black/40`}
              key={index}
              onClick={() => setActive(index)}
            >
              {index === active ? <Icon.Fill /> : <Icon.Regular />}
            </span>
          ))}
        </div>
        <span className="relative cursor-pointer p-2 hover:bg-black/40 rounded-lg transition-all duration-300 ease-out">
          <span className="xl:inline-block h-1 rounded-lg w-14 top-[-30px] left-[-5px] bg-white/40 absolute hidden"></span>
          <IoExit className="cursor-pointer" />
        </span>
      </div>
    </div>
  );
}

const icons = [
  {
    Regular: GoHome,
    Fill: GoHomeFill,
  },
  {
    Regular: RiFileList2Line,
    Fill: RiFileList2Fill,
  },
  {
    Regular: BsBarChart,
    Fill: BsBarChartFill,
  },
  {
    Regular: FaRegCirclePlay,
    Fill: FaCirclePlay,
  },
];
