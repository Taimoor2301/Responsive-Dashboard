import React from "react";
import { PiSneakerMove } from "react-icons/pi";
import { BiRun } from "react-icons/bi";
import { CiCircleChevRight } from "react-icons/ci";
import Chart from "./Chart";

export default function Overview() {
  return (
    <div className="grid grid-cols-6 gap-5">
      <Chart />
      <div className="xl:col-span-2 col-span-full flex-col md:flex-row flex xl:flex-col xl:h-[20rem] justify-between gap-6">
        <div className="bg-i rounded-2xl xl:h-2/6 h-1/2 w-full text-white flex items-center p-3">
          <span className="text-5xl p-2 rounded-xl bg-white/20 border border-white/30">
            <PiSneakerMove />
          </span>
          <span className="font-semibold flex-1 text-center">
            Daily Jogging
          </span>
        </div>

        <div className="bg-p rounded-2xl h-full xl:h-4/6 w-full flex flex-col overflow-hidden">
          <div className="bg-white/20 rounded-2xl w-full text-white flex items-center px-3 py-2">
            <span className="text-5xl p-2 rounded-xl bg-white/20 border border-white/30">
              <BiRun />
            </span>
            <span className="font-semibold flex-1 text-center">My Jogging</span>
          </div>

          <div className="px-4 flex justify-between pb-2.5 flex-1 items-end w-full gap-3">
            <div className="flex flex-col">
              <span className="text-xs text-white/60">Total Time</span>
              <span className="text-white font-bold text-3xl">748 hr</span>
              <span className="text-white/80 font-medium">July</span>
            </div>

            <CiCircleChevRight className="text-white text-5xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
