import React, { ReactNode } from "react";
import { FaReact, FaJs, FaCode } from "react-icons/fa";
import { IconType } from "react-icons";
import { SiDotnet } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";

const skills: ReactNode[] = [
  <SiDotnet className="text-4xl bg-blue-700 p-1 mx-auto" />,
  <FaReact className="text-4xl text-blue-500 mx-auto" />,
  <FaJs className="text-4xl bg-yellow-300 text-black  mx-auto" />,
  <RiNextjsFill className="text-[36px] text-black bg-white mx-auto" />,
  <img className="w-10 mx-auto bg-black" src="/images/c-sharp.png" alt="" />,
  <SiExpress className="text-4xl text-white mx-auto" />,
  <BsFiletypeSql className="text-4xl text-white mx-auto" />,
  <DiMongodb className="text-4xl text-green-700 mx-auto" />,
];

function Skills() {
  return (
    <div className="flex flex-col items-center justify-center  rounded-xl  ">
      <p className=" font-bold text-xl ">Skills</p>
      <div className="grid grid-cols-4 gap-4 align-center w-full p-4  ">
        {skills.map((skill, index) => (
          <span key={index} className="font-extrabold font-semibold  ">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
