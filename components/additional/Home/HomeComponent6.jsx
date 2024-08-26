import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

const HomeComponent6 = () => {
  return (
    <>
      <div className="bg-black text-white flex flex-col justify-center items-center pb-10 border-none">
        <h2 className="font-semibold">Artificial Intelligence</h2>
        <div className="w-[40rem] h-10 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <div className="">
          <h2 className="text-xl md:text-4xl text-center font-semibold">
          Experience the Future of Marketing with <br/> Our AI-Powered Strategies
          </h2>
          <p className=" text-center pt-4 text-white/50">Unlock unparalleled insights, streamline processes, and optimize campaigns with <br/> our advanced AI technology</p>
        </div>
        <div className="my-20 bg-black">
          <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="slow"
              className="h-[400px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const testimonials = [
  {
    image: "/assets/AiImage/Digital-marketing-company-1.png",
  },
  {
    image: "/assets/AiImage/Digital-marketing-company-2.png",
  },
  {
    image: "/assets/AiImage/Digital-marketing-company-3.png",
  },
  {
    image: "/assets/AiImage/Digital-marketing-company-4.png",
  },
  {
    image: "/assets/AiImage/Digital-marketing-company-5.png",
  },
  {
    image: "/assets/AiImage/Digital-marketing-company-6.png",
  },
];

export default HomeComponent6;
