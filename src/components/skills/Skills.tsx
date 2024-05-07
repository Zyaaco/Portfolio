"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row 
    max-w-[2000px] px-6 xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-start sm:items-center sm:mx-0"
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-[#AEC3B0] text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-24 uppercase tracking-[3px] text-[#AEC3B0] text-sm">
        Hover over a skill for the title
      </h3>

      <div className="grid grid-cols-4 gap-2 sm:gap-5 h-[60vh] mt-10">
        <Skill src={"./skills/typescript.png"} name={"TS"} />
        <Skill src={"./skills/react.png"} name={"React"} />
        <Skill src={"./skills/react-native.png"} name={"Native"} />
        <Skill src={"./skills/nextjs.png"} name={"Nextjs"} />
        <Skill src={"./skills/bun.png"} name={"Bun"} />
        <Skill src={"./skills/nodejs.png"} name={"Nodejs"} />
        <Skill src={"./skills/css.png"} name={"CSS"} />
        <Skill src={"./skills/tailwindcss.png"} name={"TWCSS"} />
        <Skill src={"./skills/sanity.png"} name={"Sanity"} />
        <Skill src={"./skills/supabase.png"} name={"Supabase"} />
        <Skill src={"./skills/stripe.png"} name={"Stripe"} />
        <Skill src={"./skills/thirdweb.png"} name={"Thirdweb"} />
      </div>
    </motion.div>
  );
}

export default Skills;
