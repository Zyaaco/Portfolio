import React, { createRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Project from "./Project";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "@mantine/carousel";

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
      name: "Chat App",
      srclink: "https://chat-app-zyaaco.vercel.app",
      img: "./images/chat-app.png",
      description:
        "A simple chat app made with Next.js and Supabase. This app is a fully functional chating application with authentication.",
      github_link: "https://github.com/zyaaco/Chat-App",
      id: 0,
    },
    {
      name: "Ecommerce Store",
      srclink: "https://sample-store-one.vercel.app",
      img: "./images/ecommerce.png",
      description:
        "A simple ecommerce store made with Next.js, Sanity and Stripe. This app has fully functional checkout with full responsiveness and properly working UX design",
      github_link: "https://github.com/Zyaaco/Sample-store",
      id: 1,
    },
    {
      name: "Wordle Clone",
      srclink: "https://zyaaco.github.io/Wordle",
      img: "./images/Wordle.png",
      description:
        "A wordle clone project I worked on. This project comes with many challenges but is relatively fun. Made with plain react.",
      github_link: "https://github.com/zyaaco/Wordle",
      id: 2,
    },
    {
      name: "Card Quiz Generator",
      srclink: "https://zyaaco.github.io/Card-quiz",
      img: "./images/Card-quiz.png",
      description:
        "A quick and fun card quiz generator using an api and React.",
      github_link: "https://github.com/zyaaco/Card-quiz",
      id: 3,
    },
    {
      name: "Currency Converter",
      srclink: "https://zyaaco.github.io/Currency-converter",
      img: "./images/currency-converter.png",
      description:
        "Just a short project to create a currency converter using a currency api.",
      github_link: "https://github.com/zyaaco/Currency-converter",
      id: 4,
    },
  ];
  // let left = -1;
  // let right = 1;
  // function scrollLeft() {
  //   if (Number(window.location.href.slice(-1)) in [0, 1, 2]) {
  //     left = Number(window.location.href.slice(-1)) - 1;
  //     right = Number(window.location.href.slice(-1)) + 1;
  //   }
  //   if (left <= -1) return;
  //   window.location.href = `#${left}`;
  //   left = Number(window.location.href.slice(-1)) - 1;
  //   right = Number(window.location.href.slice(-1)) + 1;
  // }
  // function scrollRight() {
  //   if (Number(window.location.href.slice(-1)) in [0, 1, 2]) {
  //     left = Number(window.location.href.slice(-1)) - 1;
  //     right = Number(window.location.href.slice(-1)) + 1;
  //   }
  //   if (right >= projects.length) return;
  //   window.location.href = `#${right}`;
  //   right += 1;
  //   left += 1;
  // }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative flex flex-col text-left md:flex-row justify-evenly items-center z-0 scroll-smooth w-full"
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-[#AEC3B0] text-2xl">
        Projects
      </h3>
      <Carousel
        height={700}
        loop
        controlSize={50}
        nextControlIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white font-extrabold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        }
        previousControlIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white font-extrabold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        }
        className="w-[99%] max-w-full z-20 text-white"
      >
        {projects.map((project, index) => (
          <Carousel.Slide key={index}>
            <Project project={project} i={index} length={projects.length} />
          </Carousel.Slide>
        ))}
      </Carousel>
      <div className="w-full absolute top-[30%] bg-[#AEC3B0]/10 left-0 h-[400px] -skew-y-[-12deg]" />
    </motion.div>
  );
}

export default Projects;
