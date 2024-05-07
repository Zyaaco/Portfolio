"use client";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type experience = {
  _id: number;
  company: string;
  companyImage: string;
  isCurrentlyWorkingHere: boolean;
  dateStarted: string;
  dateEnded: string;
  jobTitle: string;
  points: string[];
  technologies: { image: string; _id: number }[];
};

const experiences: experience[] = [
  {
    _id: 1,
    company: "ArtMake",
    companyImage: "/experience/Artmake.svg",
    isCurrentlyWorkingHere: true,
    dateStarted: "2023, Jul 18",
    dateEnded: "Present",
    jobTitle: "Software Engineer",
    points: [
      "Implemented UI/UX and the full frontend logic for the game",
      "Worked with supabase to fully manage the database and the backend",
      "Developed a dashboard and a seperate server for the game logic",
    ],
    technologies: [
      {
        image: "/skills/thirdweb.png",
        _id: 1,
      },
      {
        image: "/skills/nextjs.png",
        _id: 2,
      },
      {
        image: "/skills/supabase.png",
        _id: 3,
      },
      {
        image: "/skills/tailwindcss.png",
        _id: 4,
      },
    ],
  },
  {
    _id: 2,
    company: "UAB Gliukolvetas",
    companyImage: "/experience/gliuk.png",
    isCurrentlyWorkingHere: false,
    dateStarted: "2023 Mar 20",
    dateEnded: "2023 Jun 20",
    jobTitle: "Website Adiminstrator",
    points: [
      "Managed the content, design and website information",
      "Uploaded and managed shop's storage information",
      "Edited product pictures and descriptions",
    ],
    technologies: [
      {
        image: "/skills/photoshop.png",
        _id: 1,
      },
      {
        image: "/skills/excel.png",
        _id: 2,
      },
      {
        image: "/skills/word.png",
        _id: 3,
      },
      {
        image: "/skills/wordpress.png",
        _id: 4,
      },
    ],
  },
];

export default function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen  flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Experience
      </h3>

      {/* Experience cards */}
      <div className="w-screen h-3/4 md:h-2/3 md:w-full text-left pb-5 md:pb-10 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
