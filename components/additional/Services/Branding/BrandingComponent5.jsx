import Image from "next/image";
import BrandingImage from "@/public/assets/Services/Branding/Branding-4.png"

const BrandingComponent5 = () => {
  return (
    <div className="py-4 mt-16 bg-black overflow-hidden">
      <div className="bg-black text-white flex flex-col justify-center items-center border-none overflow-hidden">
        <h2 className="font-semibold">High Quality</h2>
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
            Content Writing
          </h2>
        </div>
      </div>
      <div className="h-full p-4 pt-4 text-white bg-black flex justify-center border-none">
        <div className="flex flex-col lg:flex-row h-full w-full lg:w-[80vw] items-center py-2">
          <div className="flex-1 hidden md:flex justify-start">
            <Image
              className="rounded-lg "
              src={BrandingImage}
              alt="Build Your Own Digital Brand Image"
              height={450}
              width={450}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-4 lg:w-[60%] lg:px-0">
            <div className="flex flex-col gap-4">
              <p className="font-light text-white/80 text-justify lg:leading-8">
                High-quality content is essential to establishing thought
                leadership and building trust with your audience. Our content
                writers specialize in creating engaging and SEO-friendly content
                that reflects your brand&apos;s unique voice and personality. We take
                into account your business objectives, target audience, and
                industry trends to create content that drives traffic,
                engagement, and conversions for your business.
              </p>
            </div>
          </div>
          <div className="flex-1 md:hidden flex pt-4 justify-start">
            <Image
              className="rounded-lg "
              src={BrandingImage}
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

export default BrandingComponent5;
