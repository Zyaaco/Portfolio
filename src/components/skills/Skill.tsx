import React from "react";
import { motion } from "framer-motion";

type Props = {
  src: string;
  name: string;
};

function Skill({ src, name }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        src={src}
        alt="Skill picture"
        className="rounded-full border border-gray-500 object-cover w-[4rem] h-[4rem] md:w-28 md:h-28 xl:w-32 xl:h-32 
        filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-[4rem] w-[4rem]
      md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
