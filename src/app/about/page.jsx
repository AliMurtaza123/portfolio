"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef);
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DECS */}
            <p className="text-lg">
              Ali Murtaza is a passionate and dedicated full-stack developer
              with a strong background in computer science. He graduated from
              FAST-NUCES in 2018 with a Bachelor's degree in Computer Science.
              Since then, Ali has honed his skills and expertise across a wide
              range of technologies including HTML, CSS, JavaScript, React,
              React Native, Node.js, Laravel, PHP, MySQL, and Express.js. With a
              keen eye for detail and a commitment to delivering high-quality
              solutions, Ali excels in both frontend and backend development. He
              thrives in collaborative environments and enjoys tackling complex
              challenges to create innovative and efficient solutions.
              Throughout his career, Ali has demonstrated a strong work ethic
              and a passion for continuous learning, staying updated with the
              latest advancements in technology. He is dedicated to delivering
              exceptional results and providing value to every project he works
              on. Outside of work, Ali enjoys staying active and exploring new
              technologies, always seeking opportunities to expand his skill set
              and contribute to meaningful projects.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              "Embrace the journey of continuous learning, for in the
              ever-evolving landscape of technology lies endless opportunities
              for innovation and growth." - Ali Murtaza
            </span>
            {/* BIOGRAPHY SIGN SVG */}
            <div className=""></div>
            {/* BIOGRAPHY SCROLL BUTTON */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>

            {/* BIOGRAPHY SCROLL SVG */}
          </div>

          {/* Skills CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILLS TITLE */}
            <motion.h1
              initial={{ x: -300 }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="font-bold text-2xl"
            >
              Skills
            </motion.h1>
            {/* SKILLS LIST */}
            <motion.div
              initial={{ x: -300 }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black border-2 border-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black border-2 border-black">
                TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black border-2 border-black">
                Redux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black border-2 border-black">
                PostgreSQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black border-2 border-black">
                Java
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black border-2 border-black">
                React JS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black border-2 border-black">
                NEXT JS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black border-2 border-black">
                NODE JS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black border-2 border-black">
                ExpressJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black border-2 border-black">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black border-2 border-black">
                REST API
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black border-2 border-black">
                TailwindCSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black border-2 border-black">
                Bootstrap
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black border-2 border-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black border-2 border-black">
                Laravel
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black border-2 border-black">
                Django
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black border-2 border-black">
                MYSQL
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE  CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* Experience TITLE */}
            <motion.h1
              initial={{ x: -300 }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Experience
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: -300 }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className=""
            >
              {/* EXPERIENCE LIST ITEMS 1*/}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3">
                  {/* JOB title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    {" "}
                    Senior Full Stack Developer
                  </div>
                  {/* job DESC */}
                  <div className="p-3 text-sm italic">
                    {" "}
                    Proficientincreating dynamic and userfriendly web
                    applications, collaborating effectively within
                    multidisciplinary teams to deliver high quality projects.
                  </div>
                  {/* job DATE */}
                  <div className="p-3 text-red-600 text-sm font-semibold">
                    {" "}
                    October 2023- Till Date
                  </div>
                  {/* job Company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    {" "}
                    AZ Solutions
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

              {/* EXPERIENCE LIST ITEMS 2*/}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    {" "}
                    Full Stack Web Developer
                  </div>
                  {/* job DESC */}
                  <div className="p-3 text-sm italic">
                    {" "}
                    Proficientincreating dynamic and userfriendly web
                    applications, collaborating effectively within
                    multidisciplinary teams to deliver high quality projects.
                  </div>
                  {/* job DATE */}
                  <div className="p-3 text-red-600 text-sm font-semibold">
                    {" "}
                    01 January 2021 - 31 December 2022
                  </div>
                  {/* job Company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    {" "}
                    ABL Tech
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEMS 3*/}

              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3">
                  {/* JOB title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    {" "}
                    Front-end Developer
                  </div>
                  {/* job DESC */}
                  <div className="p-3 text-sm italic">
                    {" "}
                    My current employement way better than the position before!
                  </div>
                  {/* job DATE */}
                  <div className="p-3 text-red-600 text-sm font-semibold">
                    {" "}
                    24 July 2018- 31 December 2020
                  </div>
                  {/* job Company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    {" "}
                    Mia Associates
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block sticky top-0 z-30 w-1/3 xl:1/2 ">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};
export default AboutPage;
