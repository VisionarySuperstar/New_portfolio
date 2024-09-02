"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-7 right-2 lg:hidden items-center justify-center bg-[#177622] rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="lg:w-[70%] w-[90%]   h-[70%] md:h-fit lg:max-h-[90vw]  flex flex-row bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-[20rem] h-full lg:h-full sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div className="bg-slate-500 p-2 w-[90%]">
                <div className="flex justify-between  items-start p-4 ">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-xs text-[var(--secondary)] dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-[var(--secondary)] dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-[var(--secondary)] text-xs md:text-sm lg:text-base md:h-[50vh] h-[50vh] pb-10 mt-7  flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-5xl mx-auto w-full gap-7">
  {cards.map((card, index) => (
    <motion.div
      layoutId={`card-${card.title}-${id}`}
      key={`card-${card.title}-${id}`}
      onClick={() => setActive(card)}
      className="p-7 lg:m-7 flex flex-row space-y-14 justify-between items-center hover:bg-slate-600 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
    >
      <div className="flex gap-7 lg:gap-14  flex-row items-center justify-evenly w-full">
        {/* Image on the left */}
        <motion.div layoutId={`image-${card.title}-${id}`}>
          <Image
            width={500}
            height={500}
            src={card.src}
            alt={card.title}
            className="w-10 h-10 lg:w-[40vw] lg:h-[50vh] rounded-lg object-cover object-top"
          />
        </motion.div>

        {/* Text and button on the right */}
        <div className="flex lg:flex-col flex-row  sm:flex-1 lg:items-center text-center ">
          {/* Title */}
          <motion.h3
            layoutId={`title-${card.title}-${id}`}
            className="font-medium lg:text-base text-sm  text-[var(--secondary)] dark:text-neutral-200"
          >
            {card.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            layoutId={`description-${card.description}-${id}`}
            className="hidden lg:block text-[var(--secondary)] dark:text-neutral-400"
          >
            {card.description}
          </motion.p>

          {/* Details Button */}
          <motion.button
            layoutId={`button-${card.title}-${id}`}
            className="mt-2 lg:w-[10rem] w-[5rem] lg:px-4 px-2 py-2 lg:text-sm text-[0.5rem] rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black"
          >
            {card.ctaText}
          </motion.button>
        </div>
      </div>
    </motion.div>
  ))}
</ul>

    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Decentralized finance Platform",
    title: "Turbo Trades",
    src: "/proj1.png",
    ctaText: "Details",
    ctaLink: "https://turbotrade.tech/",
    content: () => {
      return (
        <p>
          Turbo Trades is a decentralized finance (DeFi) platform designed for easy and secure wallet connection, swapping, liquidity management, and trading on both Maya and Thorchain networks
        </p>
      );
    },
  },
  {
    description: "Investment and launching facility",
    title: "Vulcanpad",
    src: "/proj2.png",
    ctaText: "Details",
    ctaLink: " https://vulcanpad.tech/",
    content: () => {
      return (
        <p>
          Vulcanpad is a platform that facilitates the launch and investment of innovative blockchain projects through secure, transparent, and efficient Initial Coin Offerings (ICOs) on the Arbitrum, Base, and BNB Networks.
        </p>
      );
    },
  },

  {
    description: "Meme token presale platform",
    title: "MarsWTF",
    src: "/proj3.png",
    ctaText: "Details",
    ctaLink: "https://mars-wtf-0-0-0.vercel.app/",
    content: () => {
      return (
        <p>
          MarsWTF is a meme token presale platform built on the Base Chain, aiming to be a gateway to the future of meme tokens on Mars. It provides a launchpad for innovative meme projects, allowing creators to raise funds and build communities while offering investors early access to potentially lucrative opportunities.
        </p>
      );
    },
  },
  
];
