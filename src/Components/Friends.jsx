import { useState } from "react";
import { BsPeople } from "react-icons/bs";
import FriendsSection from "./FriendsSection";
import { friendsData, onlineData } from "../data";
import { IoLocationOutline } from "react-icons/io5";
export default function Friends() {
  const [active, setActive] = useState("activities");
  const data = active === "activities" ? friendsData : onlineData;
  return (
    <div className="xl:col-span-3 col-span-full bg-white shadow-[-2px_0_10px] shadow-neutral-200 flex-col gap-2 py-4 pb-20 xl:pb-4 px-7 flex">
      <Heading />
      <Choose active={active} setActive={setActive} />
      <FriendsSection data={data} />
      <Map />
    </div>
  );
}

const Map = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-end justify-between gap-2">
        <span className="flex justify-center items-center gap-4 font-bold text-gray-700 pt-2">
          <IoLocationOutline className="text-2xl" />
          Live Map
        </span>

        <span className="font-medium text-sm cursor-pointer text-gray-500">
          View All
        </span>
      </div>

      <div className="max-h-44 w-full">
        <img
          src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/12/snap-map-plane.jpg?width=1200"
          alt="map image"
          className="w-full max-h-full object-cover rounded-md object-center"
        />
      </div>
    </div>
  );
};

const Choose = ({ active, setActive }) => {
  return (
    <div className="bg-gray-300 rounded-2xl flex relative cursor-pointer mt-2">
      <div
        className={`w-1/2 text-center font-bold p-3 tracking-wide relative z-[2] transition-all duration-300 ease-out delay-75 ${
          active === "activities" ? "text-white" : "text-gray-500"
        }`}
        onClick={() => setActive("activities")}
      >
        Activites
      </div>
      <div
        className={`w-1/2 text-center p-3 font-bold tracking-wide relative z-[3] transition-all duration-300 ease-out delay-75 ${
          active === "online" ? "text-white" : "text-gray-500"
        }`}
        onClick={() => setActive("online")}
      >
        Online
      </div>

      <div
        className={`absolute w-1/2 bg-i h-full inset-0 rounded-xl z-[1] transition-all dur300 ease-out ${
          active === "online" && "translate-x-full"
        }`}
      ></div>
    </div>
  );
};

const Heading = () => {
  return (
    <div className="flex w-full justify-between items-end gap-3 text-gray-700">
      <span className="flex gap-5 items-center">
        <BsPeople className="text-2xl" />
        <span className="text-2xl font-bold">Friends</span>
      </span>
      <span className="text-sm font-medium">View All</span>
    </div>
  );
};
