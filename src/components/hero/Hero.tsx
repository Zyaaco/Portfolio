import Link from "next/link";
import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import TypeWriter from "./TypeWriter";

function Hero() {
  return (
    <div className="h-screen flex flex-col-reverse justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="z-20">
        <h2 className="text-sm uppercase text-[#AEC3B0] pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <TypeWriter />
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
