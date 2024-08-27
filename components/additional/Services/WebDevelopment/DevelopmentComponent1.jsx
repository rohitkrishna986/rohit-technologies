import { SparklesCore } from "@/components/ui/sparkles";

const DevelopmentComponent1 = () => {
  return (
    <div className="h-[38rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="mb-8">
      <h1 className="font-bold lg:text-3xl text-white text-lg md:text-2xl text-center pb-2">
        From Design to Launch & Beyond.
      </h1>
      <p className="text-white/50 text-center">Transform Your Digital Presence With Our Expert Web Development Services</p>
      </div>
      <h1 className="md:text-lg text-sm lg:text-xl font-bold text-center text-white relative z-20">
        <div className=" mx-auto font-normal text-white">
          Website Design & Development Company
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
};

export default DevelopmentComponent1;
