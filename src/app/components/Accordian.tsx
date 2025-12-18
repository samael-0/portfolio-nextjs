"use client";
import React, { useState } from "react";

function Accordian() {
  const [open, setOpen] = useState(true);

  //   function Open() {
  //     if (open == true) {
  //       setOpen(false);
  //       console.log(open);
  //     } else {
  //       setOpen(true);
  //       console.log(open);
  //     }
  //   }
  const Open = () => setOpen((prev) => !prev);

  return (
    <div>
      <p className=" font-bold text-xl text-center ">Experience</p>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img className="h-10" src="images/c-sharp.png" alt="" />
          <div>
            <p>Shrawan</p>
            <p>Developer</p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <p>datetime</p>
          <button onClick={Open}>v</button>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300  ${
          open ? "max-h-full" : "max-h-0"
        }`}
      >
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eum
          magni blanditiis quaerat consequatur iste aperiam, sapiente labore
          dolorum eius quod molestias cumque iusto voluptatem quos maxime neque
          minus deserunt quis accusantium optio atque adipisci! Hic recusandae
          sunt at obcaecati magni. Hic!
        </p>
      </div>
    </div>
  );
}

export default Accordian;
