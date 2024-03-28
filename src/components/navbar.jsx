"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./navLink";
import { motion } from "framer-motion";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const topVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 45,
    backgroundColor: "rgb(255,255,255)",
  },
};
const centerVariants = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
};
const bottomVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
    backgroundColor: "rgb(255,255,255)",
  },
};

const listVariants = {
  closed: {
    x: "100vw",
  },
  opened:{
    x:'0vw',
    transition: {
      when:'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const listItemVariants = {
  closed:{
    x:-10,
    opacity:0
  },
  opened:{
    x:0,
    opacity:1,
  }
}


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} />
        ))}
      </div>

      {/* logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-3 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-2">Ali</span>
          <span className="w-12 h-8 rounded bg-white text-black p-2">.dev</span>
        </Link>
      </div>
      <div className=" hidden md:flex gap-2 w-1/3">
        <Link href="https://github.com/AliMurtaza123">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </Link>
        <Link href="https://www.facebook.com/alimurtaza.kaimkhani1/">
          <Image src="/facebook.png" alt="github" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/ali-murtaza-290775b4/">
          <Image src="/linkedin.png" alt="github" width={24} height={24} />
        </Link>
      </div>
      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className=" w-10 h-1 bg-black rounded origin-left"
          >
            {" "}
          </motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className=" w-10 h-1 bg-black rounded"
          >
            {" "}
          </motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className=" w-10 h-1 bg-black rounded origin-left"
          >
            {" "}
          </motion.div>
        </button>
        {/* Menu List */}
        {open && (
          <motion.div variants={listVariants} initial="closed" animate='opened' className="absolute top-0 left-0 h-screen w-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {links.map((link) => (
              <motion.div className="" variants={listItemVariants}>
              <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
