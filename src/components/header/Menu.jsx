import { motion } from "framer-motion";
import { opacity } from "@/utils/opacity";
import Link from "next/link";

const menuAnimation = {
  initial: {
    width: "0",
  },
  animate: {
    // inherit property allows the it to inherit the width of the parent container
    opacity: 1,
    width: "inherit",
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const menuLinksAnim = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.075 * i,
    },
  }),

  exit: (i) => ({
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.0125 * i,
    },
  }),
};

// framer motion & animation imports

export default function Menu({ toggleMenu }) {
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Insights",
      href: "/insights",
    },
    {
      label: "Work",
      href: "/work",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    // The parent div goes on top of the children div so I cant interact with the child div
    <motion.div
      variants={opacity}
      initial="opacity"
      animate="open"
      exit="closed"
      className="fixed z-50 flex h-screen w-screen  bg-black bg-opacity-20 backdrop-blur "
    >
      <motion.div
        variants={menuAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="backdrop-blur-4xl relative z-20 m-2 flex max-w-xl flex-col justify-between rounded-md bg-black py-10 overflow-hidden"
      >
        <svg
          className=" absolute -right-2 -top-0 h-72 w-60 bg-gradient-to-tr from-bright-brown to-cream blur-[10rem]"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.8,-39C46.2,-33.3,66.3,-30.7,76.5,-20C86.6,-9.3,86.6,9.4,78.4,22.6C70.1,35.7,53.5,43.3,39.1,53.8C24.6,64.2,12.3,77.5,-1.6,79.7C-15.5,81.9,-31,73,-42.2,61.5C-53.5,50,-60.4,35.9,-64.8,21.3C-69.2,6.7,-71.1,-8.5,-65.5,-20C-60,-31.5,-47.1,-39.3,-34.9,-45.7C-22.8,-52.2,-11.4,-57.4,-1.4,-55.5C8.7,-53.6,17.4,-44.7,31.8,-39Z"
            transform="translate(100 100)"
          />
        </svg>

        <nav className="flex flex-col justify-center gap-y-2 px-14 pt-24 text-4xl font-bold text-cream">
          {links.map((link, index) => {
            return (
              <div
                key={index}
                className="group flex w-fit cursor-pointer items-center gap-x-4"
              >
                <span className="invisible inline-block h-3 w-3 rounded-full bg-cream opacity-0 scale-0 transition-all group-hover:visible group-hover:opacity-100 group-hover:scale-100 ease-in-out duration-200"></span>

                <motion.div
                  className="w-fit"
                  custom={index}
                  variants={menuLinksAnim}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Link href={link.href}>{link.label}</Link>
                </motion.div>
              </div>
            );
          })}
        </nav>
        <ul className="flex justify-end gap-x-8 px-14 text-cream">
          <li>
            <a href="">Linkedin</a>
          </li>
          <li>
            <a href="">YouTube</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
        </ul>

        <button
          onClick={toggleMenu}
          className="group absolute right-6 top-6 rounded-full bg-cream font-medium text-sm h-14 w-14 text-brown"
        >
          close
        </button>
      </motion.div>
    </motion.div>
  );
}
