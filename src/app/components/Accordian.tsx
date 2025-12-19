"use client";
import React, { useState } from "react";

interface expData {
  data: exp[];
}

interface exp {
  _id: string;
  experience: string;
  position: string;
  description: string[];
}

function Accordian({ data }: expData) {
  const [open, setOpen] = useState(false);

  const Open = () => setOpen((prev) => !prev);

  return (
    <div>
      <p className=" font-bold text-xl text-center ">Experience</p>
      {data.map((items) => (
        <div key={items._id}>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <img className="h-10" src="images/c-sharp.png" alt="" />
              <div>
                <p className="font-medium items-center text-2xs   ">
                  {items.experience}
                </p>
                <p className="font-light items-center text-sm  text-para">
                  {items.position}
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <p className="font-extralight items-center 11`1`1 text-sm">
                datetime
              </p>
              <button onClick={Open}>v</button>
            </div>
          </div>
          <div
            items-center
            text-2xs
            className={`overflow-hidden transition-all duration-300   ${
              open ? "max-h-full" : "max-h-0"
            }`}
          >
            {items.description.map((descs, index) => (
              <p key={index} className="text-justify font-light text-[0.9rem]">
                {descs}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordian;
