"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function Header() {
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
        className="flex flex-row items-center gap-2"
      >
        <Link href="https://github.com/zyaaco" target="_blank" rel="noreferrer">
          <Image
            src="./github.svg"
            alt="Github logo"
            width={98}
            height={96}
            className="w-auto h-6"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/orestas-kšanas-2b173024b/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="./linkedin.svg"
            alt="Github logo"
            width={50}
            height={50}
            className="w-auto h-6"
          />
        </Link>
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
          className="flex flex-row gap-2 items-center text-[#EFF6E0] cursor-pointer"
        >
          <Image
            src="./email.svg"
            alt="Email logo"
            width={800}
            height={800}
            className="w-auto h-6"
          />
          <span className="uppercase hidden md:inline-flex text-sm text-[#EFF6E0]">
            Contact me
          </span>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
