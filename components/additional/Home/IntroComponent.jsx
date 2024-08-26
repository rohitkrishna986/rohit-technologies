"use client";

import { FlipWords } from "../../ui/flip-words";
import { SparklesCore } from "../../ui/sparkles";

export function SparklesPreview() {
  const words = ["world", "future", "modern"];
  return (
    <div className="h-[38rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <h1 className="md:text-2xl text-lg lg:text-3xl font-bold text-center text-white relative z-20">
        <div className=" mx-auto font-normal text-white">
        Connecting your brand to the
          <FlipWords words={words} />
        </div>
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#ffffff"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
