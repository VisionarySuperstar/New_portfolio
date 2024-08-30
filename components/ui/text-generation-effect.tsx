"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  para,
  className,
  filter = true,
  duration = 1,
}: {
  words: string;
  para: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [wordsScope, animateWords] = useAnimate();
  const [paraScope, animatePara] = useAnimate();
  let wordsArray = words.split(" ");
  let paraArray = para.split("  ");

  useEffect(() => {
    animateWords(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 3,
        delay: stagger(0.3),
      }
    );
  }, [wordsScope.current]);

  useEffect(() => {
    animatePara(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.09),
      }
    );
  }, [paraScope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={wordsScope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={` ${
                idx > 3 ? "text-[var(--thirdcolor)]" : "text-[var(--secondary)]"
              } font-bold   lg:leading-tight leading-8  text-left  tracking-wide  opacity-0`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            > 
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  const renderPara = () => {
    return (
      <motion.div  ref={paraScope}>
        {paraArray.map((para, idx) => {
          return (
            <motion.span
              key={para + idx}
              className="font-medium lg:text-xl text-xs leading-snug tracking-wide text-[var(--secondary)] opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {para}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div >
        <div className="flex items-start text-left justify-center flex-col space-y-7  ">
          <div className="flex flex-col  items-start space-y-4">
            {renderPara()}
            {renderWords()}
          </div>
  
        </div>
      </div>
    </div>
  );
};
