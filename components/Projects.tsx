import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Project from "./Project";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type Props = {};
type project = {
  name: string;
  srclink: string;
  img: string;
  description: string;
  id: number;
};

function Projects({}: Props) {
  const projects = [
    {
      name: "Wordle Clone",
      srclink: "https://zyaaco.github.io/Wordle",
      img: "./images/Wordle.png",
      description:
        "A wordle clone project I worked on. This project comes with many challenges but is relatively fun. Made with plain react.",
      id: 0,
    },
    {
      name: "Card Quiz Generator",
      srclink: "https://zyaaco.github.io/Card-quiz",
      img: "./images/Card-quiz.png",
      description:
        "A quick and fun card quiz generator using an api and React.",
      id: 1,
    },
    {
      name: "Currency Converter",
      srclink: "https://zyaaco.github.io/Currency-converter",
      img: "./images/currency-converter.png",
      description:
        "Just a short project to create a currency converter using a currency api.",
      id: 2,
    },
  ];
  let left = -1;
  let right = 1;
  function scrollLeft() {
    if (Number(window.location.href.slice(-1)) in [0, 1, 2]) {
      left = Number(window.location.href.slice(-1)) - 1;
      right = Number(window.location.href.slice(-1)) + 1;
    }
    if (left <= -1) return;
    window.location.href = `#${left}`;
    left = Number(window.location.href.slice(-1)) - 1;
    right = Number(window.location.href.slice(-1)) + 1;
  }
  function scrollRight() {
    if (Number(window.location.href.slice(-1)) in [0, 1, 2]) {
      left = Number(window.location.href.slice(-1)) - 1;
      right = Number(window.location.href.slice(-1)) + 1;
    }
    if (right >= projects.length) return;
    window.location.href = `#${right}`;
    right += 1;
    left += 1;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0 scroll-smooth"
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-[#AEC3B0] text-2xl">
        Projects
      </h3>
      <button
        className="absolute w-12 h-12 left-10 top-[50vh] text-center z-30 scroll-smooth"
        onClick={scrollLeft}
      >
        <a className="absolute top-0 right-0 left-0 bg-[#EFF6E0] border-2 rounded-full opacity-10 hover:opacity-100 transition-opacity scroll-smooth">
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
              fill-rule="nonzero"
            />
          </svg>
        </a>
      </button>
      <button
        className="absolute w-12 h-12 right-10 top-[50vh] text-center z-30 scroll-smooth"
        onClick={scrollRight}
      >
        <a className="absolute top-0 right-0 left-0 bg-[#EFF6E0] border-2 rounded-full opacity-10 hover:opacity-100 transition-opacity scroll-smooth">
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
              fill-rule="nonzero"
            />
          </svg>
        </a>
      </button>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20
      scrollbar-thumb-[#AEC3B0]/80"
      >
        {projects.map((project, index) => (
          <div key={index}>
            <Project project={project} i={index} length={projects.length} />
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#AEC3B0]/10 left-0 h-[400px] -skew-y-[-12deg]" />
    </motion.div>
  );
}

export default Projects;
