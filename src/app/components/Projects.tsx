import React from "react";

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center  rounded-xl">
      <p className=" font-bold text-xl ">Projects</p>
      <div className=" flex justify-between  w-full">
        <div className="flex gap-2">
          <img src="images/c-sharp.png" className="h-10" alt="" />
          <div>
            <p>Finance Tracker</p>
            <p>A React .Net Finance Tracking System</p>
          </div>
        </div>
        <p>datetime</p>
      </div>
    </div>
  );
}

export default Projects;
