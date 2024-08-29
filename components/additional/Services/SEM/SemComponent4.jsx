import Image from "next/image";
import SemImage from "@/public/assets/Services/Sem/Sem-3.gif";

const SemComponent4 = () => {
  return (
    <div className="py-4 bg-black overflow-hidden">
      <div className="bg-black text-white flex flex-col justify-center items-center border-none overflow-hidden">
        <h2 className="font-semibold">Advertisements</h2>
        <div className="w-[40rem] h-10 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <div className="h-full px-4 text-white bg-black flex justify-center border-none">
          <div className="flex flex-col lg:flex-row h-full w-full lg:w-[80vw] items-center">
            <div className="flex-1 hidden md:flex justify-start">
              <Image
                className="rounded-lg "
                src={SemImage}
                alt="Build Your Own Digital Brand Image"
                height={450}
                width={450}
              />
            </div>
            <div className="w-full flex flex-col justify-center gap-4 lg:w-[60%] lg:px-0">
              <h2 className="text-xl lg:text-4xl font-medium text-center md:text-start">
                Display Advertising
              </h2>
              <div className="flex flex-col gap-4">
                <p className="font-light text-white/80 text-justify lg:leading-8">
                  Our display advertising services involve creating and managing
                  targeted ad campaigns onvarious websites and social media
                  platforms. We will work with you to identify your target
                  audience and create ad campaigns that are tailored to your
                  business objectives.
                </p>
                <p className="font-light text-white/80 text-justify lg:leading-8">
                  Our experts will create visually appealing display ads that
                  are designed to capture the attention of your target audience.
                  We will then target your ads to websites and social media
                  platforms that are frequented by your target audience.
                </p>
              </div>
            </div>
            <div className="flex-1 md:hidden flex justify-start py-8">
              <Image
                className="rounded-lg "
                src={SemImage}
                alt="Build Your Own Digital Brand Image"
                height={450}
                width={450}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemComponent4;
