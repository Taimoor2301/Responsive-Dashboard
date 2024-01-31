import React from "react";
import Sidebar from "../Components/Sidebar";
import Main from "../Components/Main";
import Friends from "../Components/Friends";

export default function Dashboard() {
  return (
    <main className="bg-zinc-100 min-h-full mx-auto w-full rounded-2xl grid grid-cols-12 place-content-start max-w-[1600px] xl:max-h-[800px] overflow-hidden">
      <Sidebar />
      <Main />
      <Friends />
    </main>
  );
}
