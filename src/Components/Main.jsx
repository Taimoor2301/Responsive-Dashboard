import React from "react";
import Search from "./Search";
import Overview from "./Overview";
import Card from "./Card";
import { IoBicycle } from "react-icons/io5";
import { BiRun } from "react-icons/bi";
import { PiSneakerMove } from "react-icons/pi";

export default function Main() {
  return (
    <div className="col-span-full xl:col-span-8 p-5 flex flex-col gap-10 xl:gap-5 justify-between">
      <Search />
      <Overview />
      <div className="flex gap-10 xl:gap-5 xl:justify-between justify-evenly flex-wrap">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

const cardData = [
  {
    title: "Bicycle Drill",
    sub: "35km/week",
    progress: 45,
    text: "17/35km",
    time: "2 days",
    Icon: IoBicycle,
  },
  {
    title: "Jogging Hero",
    sub: "32km/month",
    progress: 13,
    text: "2/12km",
    time: "17 days",
    Icon: BiRun,
  },
  {
    title: "Healthy Busy",
    sub: "3600 steps/weeks",
    progress: 90,
    text: "3200/3600 steps",
    time: "2 days",
    Icon: PiSneakerMove,
  },
];
