"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero3.png"
            alt="profilepicture"
            fill
            className=" object-contain"
          ></Image>
        </div>
        {/* Text container */}
        <div className="h-1/2  lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/*  title */}
          <div className="text-4xl font-bold">
            <h1>Crafting Digital experiences, designing tomorrow</h1>
          </div>
          {/*  description */}
          <div className="">
            <p></p>
          </div>
          {/* Buttons */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio"><button className="p-4 rounded-lg ring-1 ring-black bg-black text-white shadow-2xl">
              View My Work
            </button>
            </Link>
            <Link href="/contact">
            <button className="p-4 rounded-lg ring-1 ring-black shadow-2xl">
              Contact Me
            </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
