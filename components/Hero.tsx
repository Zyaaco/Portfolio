import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      '"Hey, I am Orestass "',
      ">Developer",
      "<Designer />",
      "Your-next-hire.tsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col-reverse justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {/* <img
        className="relative rounded-xl h-32 w-32 mx-auto object-cover"
        src="https://cdn.discordapp.com/attachments/872085751590957096/1022205292877992096/Screenshot_20220902-145334_Gallery.jpg?size=4096"
        alt=""
      /> */}
      <div className="z-20">
        <h2 className="text-sm uppercase text-[#AEC3B0] pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#5BC0BE" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          {/* <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link> */}
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
