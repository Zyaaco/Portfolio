import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      name: "Wordle Clone",
      srclink: "https://zyaaco.github.io/Wordle",
      img: "./images/Wordle.png",
      description:
        "A wordle clone project I worked on. This project comes with many challenges but is relatively fun. Made with plain react.",
    },
    {
      name: "Card Quiz Generator",
      srclink: "https://zyaaco.github.io/Card-quiz",
      img: "./images/Card-quiz.png",
      description:
        "A quick and fun card quiz generator using an api and React.",
    },
    {
      name: "Currency Converter",
      srclink: "https://zyaaco.github.io/Currency-converter",
      img: "./images/currency-converter.png",
      description:
        "Just a short project to create a currency converter using a currency api.",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-[#AEC3B0] text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20
      scrollbar-thumb-[#AEC3B0]/80"
      >
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={i}
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{ once: true }}
              src={project.img}
              className="h-[50vh] w-[90vw] md:w-[40vw]"
              alt=""
            />
            <div className="space-y-10 px-0 w-[80vh] md:px-10 md:max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#EFF6E0]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {
                  <a
                    href={project.srclink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                }
              </h4>

              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#AEC3B0]/10 left-0 h-[400px] -skew-y-[-12deg]" />
    </motion.div>
  );
}

export default Projects;
