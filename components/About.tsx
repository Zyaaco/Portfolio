import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto
    items-center"
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] text-[#AEC3B0] text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src="./images/me.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-xl
         object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          A <span className="underline decoration-[#EFF6E0]/50">little</span>{" "}
          about me
        </h4>
        <p className="text-base">
          I am a full-stack web developer with a passion for creating and
          designing websites. I have a strong desire to learn new technologies.
          I am a self-starter and a quick learner. I am always looking for new
          challenges and opportunities to grow as a developer. I am a hard
          worker and I will do a great job for you.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
