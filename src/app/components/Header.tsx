"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const url: { url: string; label: string }[] = [
  {
    url: "/",
    label: "homepage",
  },
  {
    url: "/blog",
    label: "blog",
  },
  {
    url: "/contact",
    label: "contact",
  },
];

export const Header = () => {
  const currentPath = usePathname();
  return (
    // <ul className="flex gap-4 justify-center font-pop ">
    //   <li>about</li>
    //   <li>updates</li>
    //   <li>contact</li>
    // </ul>
    <ul className="flex gap-4 justify-center ">
      {url.map((links) => (
        <li key={links.url}>
          <Link
            href={links.url}
            className={`${
              currentPath == links.url ? "border-b border-white" : ""
            }`}
          >
            {links.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
