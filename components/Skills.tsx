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
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-24 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5 h-[60vh]">
        <Skill
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
          }
          percent={"80"}
        />
        <Skill
          src={
            "https://static-00.iconduck.com/assets.00/file-type-typescript-official-icon-256x256-aavrgmi0.png"
          }
          percent={"75"}
        />
        <Skill
          src={
            "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png?width=256&s=3f7493995143d3cf40b1fedc582607cea194b579"
          }
          percent={"75"}
        />
        <Skill
          src={"https://cdn-icons-png.flaticon.com/512/5968/5968242.png"}
          percent={"80"}
        />
        <Skill
          src={"https://cdn-icons-png.flaticon.com/512/888/888859.png"}
          percent={"100"}
        />
        <Skill
          src={
            "https://static-00.iconduck.com/assets.00/nextjs-icon-256x256-7qkwzz24.png"
          }
          percent={"65"}
        />
        <Skill
          src={"https://img.icons8.com/color/480/nodejs.png"}
          percent={"70"}
        />
        <Skill
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
          }
          percent={"90"}
        />
        <Skill
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
          }
          percent={"75"}
        />
        <Skill
          src={"https://avatars.githubusercontent.com/u/17177659?s=200&v=4"}
          percent={"50"}
        />
        <Skill
          src={"https://cdn.iconscout.com/icon/free/png-256/mongodb-226029.png"}
          percent={"60"}
        />
        <Skill
          src={"https://cdn-icons-png.flaticon.com/512/919/919836.png"}
          percent={"50"}
        />
      </div>
    </motion.div>
  );
}

export default Skills;
