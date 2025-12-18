"use server";

import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { AutoCarousel } from "./components/AutoCarousel";

import { ReactNode } from "react";
import Skills from "./components/Skills";
import About from "./components/About";
import Accordian from "./components/Accordian";
import Projects from "./components/Projects";
import { GetUserName } from "../action/GetUserInfo";

export default async function Home() {
  const data = await GetUserName();
  return (
    <div className="flex flex-col items-center gap-4    w-full font-inter scale-100 h-full">
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
      <div className="lg:w-[45%] w-[80%] mx-auto sm  flex flex-col  gap-7  mb-17 ">
        <div className="   rounded-xl  flex flex-col items-center ">
          {/* details */}
          <Info data={data} />
        </div>
        {/* about */}
        <About />
        {/* skils */}

        <Skills />

        {/* projects */}
        <div className="  rounded-xl  flex flex-col items-center ">
          {/* <p className=" font-bold mb-2 ">Projects</p> */}
          <AutoCarousel />
        </div>

        {/* details */}
        <Accordian />

        {/* projects */}
        <Projects />
      </div>
    </div>
  );
}
