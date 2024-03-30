"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "Ride ShareX",
      desc: "Introducing RideShareX, a dynamic Uber clone project designed for seamless transportation solutions. With its intuitive interface, real-time tracking, and transparent pricing, RideShareX ensures a convenient and reliable ride-hailing experience for users. Experience the future of urban mobility with RideShareX today.",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://github.com/AliMurtaza123/Uberclone",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "React-Native Quiz Appx",
      desc: "Introducing our mobile app, a comprehensive learning platform where users can engage in live quizzes and enrich their knowledge on-the-go. With interactive features and real-time feedback, users can immerse themselves in an engaging learning experience anytime, anywhere. Join our community and elevate your learning journey with our innovative mobile app today!",
      img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://github.com/AliMurtaza123/TeachTok",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "AfriqMarketHub",
      desc: "AfriqMarketHub: Redefining online shopping with a diverse product range, seamless user experience, and secure transactions. Trust us for reliable delivery and an unparalleled shopping journey. Join us today for the ultimate convenience in e-commerce.",
      img: "/afriqmarkethub.png",
      link: "https://afriqmarkethub.azsolutionspk.com/",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "HuntFish.Live",
      desc: "Introducing HuntFish.Live: the ultimate platform for hunters. Stream your hunting adventures live and discover real-time animal locations for optimized hunting success. Join our community and experience the thrill of the hunt like never before!",
      img: "/huntfish.png",
      link: "https://huntcheck.azsolutionspk.com",
    },
  ];

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5 }}
    >
      <div className="h-[600vh]" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Work
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div
              className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-red-300`}
            />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-4xl">{item.title}</h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[300px] xl:w-[600px] xl:h-[300px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] xl:w-[600px] lg:text-lg">{item.desc}</p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-base lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded shadow-2xl">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        {/* SVG CONTAINER */}
        <div className="relative">
          <motion.svg animate={{rotate:360}} transition={{duration:8, ease:"linear", repeat:Infinity}} viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px]">
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl ">Full Stack Web and App Developer !</textPath>
            </text>
          </motion.svg>
          <Link
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
            href={"/contact"}
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
export default PortfolioPage;
