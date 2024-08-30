"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { IoIosMail } from "react-icons/io";
import { FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl  text-xl text-white relative z-20")}>
        Your Dream Project Starts Here
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Let&apos;s Make It Happen!
      </p>
      <div className="social text-white mx-[20%] my-10 z-20 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10">
        <a
          href="mailto:lucaslee971127@gmail.com"
          className=" flex items-center"
        >
          <IoIosMail className="mx-1 lg:text-4xl text-3xl" />{" "}
          lucaslee971127@gmail.com
        </a>
        <div className=" flex space-x-4 items-center justify-center lg:text-4xl text-3xl ">
          <a href="https://github.com/Superstar-Lucas" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/lucas-lee-a54185325/" target="_blank">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}
