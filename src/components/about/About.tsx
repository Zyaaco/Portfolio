"use client";
import { motion } from "framer-motion";

function About() {
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
        src="./me.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-xl
         object-cover md:rounded-lg md:w-56 md:h-56 xl:w-[350px] xl:h-[350px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          A <span className="underline decoration-[#EFF6E0]/50">little</span>{" "}
          about me
        </h4>
        <p className="text-base">
          Self-taught in Javascript and React, I have become a proficient web
          developer and software engineer with a focus on building user-friendly
          web applications. I have a track record of success in problem-solving
          and team collaboration, and I am committed to ongoing learning and
          staying up-to-date in the industry. I am confident in my skills and
          ready to make a positive impact as a web developer and software
          engineer on any team.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
