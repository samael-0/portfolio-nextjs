"use client";

import { Header } from "./components/Header";
import { Info } from "./components/Info";

const skills: [string] = ["c#", "javascript", "react", ".Net", "express"];

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4    w-full font-inter scale-100">
      <div className="flex justify-between w-full px-10 py-4 font-extrabold">
        <p>portfolio</p>
        {/* Header */}
        <Header />
        <ul className="flex">
          <li>
            <button>en</button>
          </li>
        </ul>
      </div>
      <div className="w-[40rem]  flex flex-col  gap-7">
        <div className="  p-4 pb-9 pt-15 rounded-xl  flex flex-col items-center ">
          {/* details */}
          <Info />
        </div>
        {/* about */}
        <div className="flex flex-col items-center rounded-xl  ">
          <p className=" font-bold ">About</p>
          <p className=" text-center ">
            I am a Kathmandu based Software Developer working consistently
            across the field of webdeveloped application across multiple fields
            like banking,entertainment
          </p>
        </div>
        {/* skils */}
        <div className="flex flex-col items-center rounded-xl  ">
          <p className=" font-bold ">Skills</p>
          <div className="grid grid-cols-4 gap-2  w-full p-4">
            {skills.map((skill, index) => (
              <p
                key={index}
                className="font-extrabold   rounded-lg bg-[#182233] font-semibold  mx-auto w-[6rem] px-7 "
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
