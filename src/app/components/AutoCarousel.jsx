"use client";
import { useEffect, useState } from "react";

const slides = [
  "/images/project1.png",
  "/images/project2.png",
  "/images/project1.png",
  "/images/project2.png",
  "/images/project1.png",
  "/images/project2.png",
];

const VISIBLE_COUNT = 3;

export function AutoCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev >= slides.length - VISIBLE_COUNT ? 0 : prev + 1
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-2 transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / VISIBLE_COUNT)}%)`,
        }}
      >
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="slide"
            className="w-1/3 flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
