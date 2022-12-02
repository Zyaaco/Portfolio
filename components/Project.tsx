import React from "react";
import { motion } from "framer-motion";

type Props = {
  project: project;
  i: number;
  length: number;
};
type project = {
  name: string;
  srclink: string;
  img: string;
  description: string;
  id: number;
};

function Project({ project, i, length }: Props) {
  return (
    <div
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen scroll-smooth"
      key={i}
      id={i.toString()}
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
        className="md:h-[50vh] cursor-pointer"
        onClick={() => window.open(project.srclink, "_blank")}
        alt=""
      />
      <div className="space-y-10 px-0 w-[50vh] md:w-[80vh] md:px-10 md:max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-[#EFF6E0]/50">
            Project {i + 1} of {length}:
          </span>{" "}
          {
            <a href={project.srclink} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          }
        </h4>

        <p className="text-lg text-center md:text-left">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default Project;
