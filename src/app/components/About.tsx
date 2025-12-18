import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center rounded-xl  ">
      <p className=" font-bold text-xl mb-2">About</p>
      <p className=" text-justify font-light text-[0.9rem] ">
        I am a{" "}
        <a className="bg-red-400/30 hover:cursor-pointer px-1.5 py-0.5 font-medium rounded-lg text-red-400">
          Full-Stack Developer
        </a>
        &nbsp;specializing in{" "}
        <a className="bg-blue-700/30 hover:cursor-pointer px-1 font-bold text-blue-700">
          .NET
        </a>{" "}
        and{" "}
        <a className="bg-[#00D3F7]/30 px-1.5 py-0.5 rounded-lg hover:cursor-pointer font-bold text-[#00D3F7]">
          React
        </a>
        , with experience building end-to-end web applications using &nbsp;
        <a className="bg-[#D9FBF3] hover:cursor-pointer px-1 font-bold text-green-700">
          ExpressJs
        </a>
        ,{" "}
        <a className="bg-[#FAEDFD] hover:cursor-pointer px-1 font-bold text-pink-700">
          SQL
        </a>
        , and{" "}
        <a className="bg-white hover:cursor-pointer px-1 font-bold text-black">
          NextJS
        </a>
        . I enjoy collaborating with cross-functional teams, rapidly prototyping
        solutions, and delivering scalable, high-quality software.
      </p>
    </div>
  );
}

export default About;
