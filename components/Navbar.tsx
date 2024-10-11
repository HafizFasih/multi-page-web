"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const listItems: React.JSX.Element = (
    <>
      {["home", "services", "about", "contact"].map((val, ind) => (
        <Link key={ind} href={val === "home" ? "/" : val}>
          <li className="h-full w-24 flex items-center justify-center duration-300 capitalize cursor-pointer">
            {val}
          </li>
        </Link>
      ))}
    </>
  );
  return (
    <nav className="relative h-16 w-full bg-zinc-900 flex items-center justify-between px-10 text-white">
      <div className="text-2xl font-semibold uppercase">logo</div>
      <ul className="h-full sm:flex hidden">{listItems}</ul>
      {sliderBox(listItems)}
    </nav>
  );
};

export default Navbar;

const sliderBox = (list: React.JSX.Element) => {
  const [slider, setSlider] = useState<boolean>(false);
  return (
    <>
      <div
        className="h-9 w-9 bg-zinc-700 relative left-5 sm:hidden inline-block rounded"
        onClick={() => setSlider(val => !val)}></div>
      <div className={`absolute ${slider ? "left-0" : "-left-full"} h-screen w-1/2 top-full bg-black/90 duration-500 flex flex-col items-center justify-between text-2xl py-16`}
      onClick={()=>setSlider(false)}
      >{list}</div>
    </>
  );
};
