import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
  github_link: string;
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
        className="md:h-[40vh] object-cover cursor-pointer"
        onClick={() => {
          window.open(project.srclink);
        }}
        alt=""
      />
      <div className="space-y-10 px-0 w-[80vw] md:w-[80vh] md:px-10 md:max-w-6xl">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          <span className="underline decoration-[#EFF6E0]/50">
            Project {i + 1} of {length}:
          </span>{" "}
          {
            <a href={project.srclink} target="blank" rel="noopener noreferrer">
              {project.name}
            </a>
          }
        </h4>

        <p className="text-lg text-center md:text-left">
          {project.description}
        </p>
        <Link href={project.github_link} target="_blank" rel="noreferrer">
          <Image
            src="/github.svg"
            alt="Github logo"
            width={98}
            height={96}
            className="w-auto h-6"
          />
        </Link>
      </div>
    </div>
  );
}

export default Project;
