import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row 
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-start sm:items-center mx-6 sm:mx-0"
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-[#AEC3B0] text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-24 uppercase tracking-[3px] text-[#AEC3B0] text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-2 sm:gap-5 h-[60vh] mt-10">
        <Skill src={"./images/javascript.png"} percent={"80"} />
        <Skill src={"./images/typescript.png"} percent={"75"} />
        <Skill src={"./images/react.png"} percent={"75"} />
        <Skill src={"./images/css.png"} percent={"80"} />
        <Skill src={"./images/html.png"} percent={"100"} />
        <Skill src={"./images/nextjs.png"} percent={"65"} />
        <Skill src={"./images/nodejs.png"} percent={"70"} />
        <Skill src={"./images/vscode.png"} percent={"90"} />
        <Skill src={"./images/tailwindcss.png"} percent={"75"} />
        <Skill src={"./images/sanity.png"} percent={"50"} />
        <Skill src={"./images/mongodb.png"} percent={"60"} />
        <Skill src={"./images/mysql.png"} percent={"50"} />
      </div>
    </motion.div>
  );
}

export default Skills;
