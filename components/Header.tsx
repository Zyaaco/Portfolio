import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: 1000,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/zyaaco"
          fgColor={"#EFF6E0"}
          bgColor="transparent"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/orestas-kšanas-2b173024b/"
          fgColor={"#EFF6E0"}
          bgColor="transparent"
          target="_blank"
          rel="noopener noreferrer"
        />
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: -1000,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.3,
          }}
          className="flex flex-row items-center text-[#EFF6E0] cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor={"#EFF6E0"}
            bgColor="transparent"
          />
          <a
            className="uppercase hidden md:inline-flex text-sm text-[#EFF6E0]"
            href="#contact"
          >
            Contact me
          </a>
        </motion.div>
      </Link>
    </header>
  );
}
