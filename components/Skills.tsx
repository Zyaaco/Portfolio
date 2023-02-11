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
        Hover over a skill for the title
      </h3>

      <div className="grid grid-cols-4 gap-2 sm:gap-5 h-[60vh] mt-10">
        <Skill src={"./images/javascript.png"} name={"JS"} />
        <Skill src={"./images/typescript.png"} name={"TS"} />
        <Skill src={"./images/react.png"} name={"React"} />
        <Skill src={"./images/css.png"} name={"CSS"} />
        <Skill src={"./images/html.png"} name={"HTML"} />
        <Skill src={"./images/nextjs.png"} name={"Nextjs"} />
        <Skill src={"./images/nodejs.png"} name={"Nodejs"} />
        <Skill src={"./images/vscode.png"} name={"VSCode"} />
        <Skill src={"./images/tailwindcss.png"} name={"TWCSS"} />
        <Skill src={"./images/sanity.png"} name={"Sanity"} />
        <Skill src={"./images/mongodb.png"} name={"MongoDB"} />
        <Skill src={"./images/mysql.png"} name={"MySQL"} />
        <Skill src={"./images/stripe.png"} name={"Stripe"} />
      </div>
    </motion.div>
  );
}

export default Skills;
