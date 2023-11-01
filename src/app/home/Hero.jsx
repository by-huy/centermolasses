"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="mb-[-100vh] ">
      <motion.div style={{ y, opacity }} className="sticky top-0 ">
        <div className="relative overflow-hidden">
          <div className="section-padding absolute  bottom-1 z-10 py-4 font-satoshi text-white">
            <div className=" font-medium pl-1 text-md">
              <p className="mix-blend-exclusion text-md md:text-lg lg:text-xl ">
                A creative web & branding agency
              </p>
            </div>
            <h1 className="flex flex-col font-display text-display font-extrabold uppercase">
              <span>Center</span>
              <span>Molasses</span>
            </h1>
          </div>
          <video
            className="-z-10 h-screen rounded-md object-cover brightness-75 "
            autoPlay={true}
            muted
            loop={true}
          >
            <source src="/videos/hero1.webm" type="video/webm" />
          </video>
        </div>
      </motion.div>
      <div className="h-screen"></div>
    </section>
  );
}
