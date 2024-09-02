"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextGenerateEffectDemo } from "./TextGen";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold text-[var(--secondary)] text-center">
        Hi, I&apos;m Lucas
       
        </div>
        <div className="font-extralight text-base md:text-4xl text-[var(--secondary)] py-4">
        I&apos;m a Senior Fullstack Blockchain Engineer
        </div>
        <a href="https://www.linkedin.com/in/lucas-lee-a54185325/" target="_blank"  className="cssbutton  ">
          Contact Now
        </a>
      </motion.div>
    </AuroraBackground>
  );
}
