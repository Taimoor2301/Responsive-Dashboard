import React from "react";

export default function Card({ Icon, title, sub, progress, time, text }) {
  return (
    <div className="flex basis-[280px] xl:flex-1 gap-2 flex-col p-4 rounded-2xl bg-white shadow-gray-300 shadow-[0_2px_5px]">
      <span className="text-white text-4xl bg-i shadow-i/30 shadow-[0_4px_10px] w-max self-center rounded-xl p-3 mt-[-16%]">
        <Icon />
      </span>

      <div className="flex flex-col text-center">
        <h3 className="text-xl font-bold text-gray-700">{title}</h3>
        <p className="text-sm text-gray-500">{sub}</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>

      <div className="w-full bg-gray-500 h-1 rounded flex items-center">
        <div
          className="bg-green-600 rounded h-[110%]"
          style={{ width: `${progress + "%"}` }}
        ></div>
      </div>

      <div className="flex justify-between items-center w-full pt-4">
        <span className="text-gray-500 text-xs font-medium">{text}</span>

        <div className="flex justify-center items-center text-p bg-p/40 rounded-2xl text-sm px-4 py-1">
          {time} left
        </div>
      </div>
    </div>
  );
}
