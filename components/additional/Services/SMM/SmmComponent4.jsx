import Image from "next/image";
import SmmImage from "@/public/assets/Services/Smm/Smm-3.webp";

const SmmComponent4 = () => {
  return (
    <div className="py-4 mt-8 md:mt-16 bg-black overflow-hidden">
      <div className="bg-black text-white flex flex-col justify-center items-center border-none overflow-hidden">
        <h2 className="font-semibold">Brand Development</h2>
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
            Target the Audience & Grow Your Brand
          </h2>
        </div>
      </div>
      <div className="h-full p-4 pt-8 text-white bg-black flex justify-center border-none">
        <div className="flex flex-col lg:flex-row h-full w-full lg:w-[80vw] items-center py-2">
          <div className="flex-1 hidden md:flex justify-start">
            <Image
              className="rounded-lg "
              src={SmmImage}
              alt="Build Your Own Digital Brand Image"
              height={450}
              width={450}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-4 lg:w-[60%] lg:px-0">
            <div className="flex flex-col gap-4">
              <p className="font-light text-white/80 text-justify lg:leading-8">
                Our mission is to help businesses and organizations connect with
                their target audience and grow their brand through the power of
                social media. We believe that social media is a vital tool for
                building brand awareness, engaging with customers, and driving
                sales, and we are committed to providing our clients with the
                expertise and support they need to succeed in today&apos;s digital
                world. At our Social Media Marketing India, we prioritize
                innovation, creativity, and collaboration to deliver customized
                solutions that meet our clients&apos; unique needs and exceed their
                expectations.
              </p>
            </div>
          </div>
          <div className="flex-1 md:hidden flex pt-8 justify-start">
            <Image
              className="rounded-lg "
              src={SmmImage}
              alt="Build Your Own Digital Brand Image"
              height={450}
              width={450}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmmComponent4;
