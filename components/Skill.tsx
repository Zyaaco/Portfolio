import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  src: string;
  percent: string;
};

function Skill({ directionLeft, src, percent }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <Image
        src={src}
        alt="Skill picture"
        width={"127px"}
        height={"100px"}
        className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 
        filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20
      md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {percent}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
