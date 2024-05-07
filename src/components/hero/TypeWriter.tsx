"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function TypeWriter() {
  const [text, count] = useTypewriter({
    words: [
      '"Hey, I am Orestas"',
      ">Developer",
      "<ᵘˣDesigner />",
      "Your-next-hire.tsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <h1 className="text-5xl lg:text-6xl font-semibold px-10">
      <span className="mr-3">{text}</span>
      <Cursor cursorColor="#5BC0BE" />
    </h1>
  );
}

export default TypeWriter;
