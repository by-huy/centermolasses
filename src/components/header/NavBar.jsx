"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import { opacity } from "@/utils/opacity";
import Link from "next/link";
import Menu from "./Menu";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // tracking the state of the navBar
  const [navChange, setNavChange] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // tracking the viewport scroll Y
  const { scrollY } = useScroll();

  // Framer motion's built in method instead of using useEffect and cleaning up
  useMotionValueEvent(scrollY, "change", (event) => {
    event >= 300 ? setNavChange(true) : setNavChange(false);
  });

  const navVariants = {
    initial: {
      backgroundColor: "rgba(24, 24, 24, 0)",
      padding: "0rem",
    },
    animate: {
      backgroundColor: "rgba(24, 24, 24, 0.3)",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
    },
  };

  return (
    <div>
      <header className=" fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 rounded-xl ">
        <div className=" px-[5%] md:px-[2%] w-full py-3 ">
          {/* Handling the navBar change logic */}
          <motion.nav
            variants={navVariants}
            animate={navChange ? "animate" : "initial"}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`grid w-full grid-cols-3 place-items-center rounded-lg  text-white  ${
              navChange ? "backdrop-blur-3xl" : ""
            }`}
          >
            {/* menu nav button */}
            <button
              onClick={toggleMenu}
              className="bg-accent font-denton group relative  z-[60] flex h-14 w-14 items-center justify-center justify-self-start overflow-hidden rounded-full bg-cream px-5 text-sm font-medium"
            >
              <motion.span
                variants={opacity}
                animate={!menuOpen ? "open" : "closed"}
                className=" absolute h-fit "
              >
                <span className="relative flex flex-col items-center justify-center">
                  <span className="absolute flex h-20 w-20 items-center justify-center bg-cream font-medium text-brown transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:opacity-0">
                    menu
                  </span>
                  <span className="ease-[cubic-bezier(0, 0.55, 0.45, 1)] absolute flex h-20 w-16 translate-y-20 items-center justify-center rounded-full bg-brown transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    menu
                  </span>
                </span>
              </motion.span>
              <motion.span
                variants={opacity}
                animate={menuOpen ? "open" : "closed"}
                className=" absolute h-fit opacity-0 "
              >
                <span className="relative flex flex-col items-center justify-center">
                  <span className="absolute flex h-20 w-20 items-center justify-center bg-cream text-black transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:opacity-0">
                    close
                  </span>
                  <span className="ease-[cubic-bezier(0, 0.55, 0.45, 1)] absolute flex h-20 w-20 translate-y-20 items-center justify-center rounded-full bg-brown transition-all duration-[400ms] group-hover:translate-y-0 group-hover:opacity-100">
                    close
                  </span>
                </span>
              </motion.span>
            </button>

            {/* LOGO LINK */}
            <div className="flex w-full items-start justify-center font-display text-xl font-black">
              <Link to="/" href="">
                CM.
              </Link>
            </div>

            {/* CTA */}
            <div className="justify-self-end lg:text-base">
              <a
                className="font-denton group relative flex flex-col rounded-full bg-cream px-5 lg:px-8 py-3 text-black"
                href=""
              >
                <span className="font-medium text-brown transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:opacity-0">
                  Let&apos;s Talk
                </span>
                <span className="absolute translate-y-2 font-medium text-brown opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  Let&apos;s Talk
                </span>
              </a>
            </div>
          </motion.nav>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {menuOpen && <Menu toggleMenu={toggleMenu} />}
      </AnimatePresence>
    </div>
  );
}
