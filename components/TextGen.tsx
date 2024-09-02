"use client";
import { TextGenerateEffect } from "@/components/ui/text-generation-effect";

const words = `I'm a Senior Fullstack Blockchain Engineer`;
const paragraph = `Hi, I'm Lucas`

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect className="lg:text-[4rem] text-2xl" words={words} para={paragraph} />;
}
