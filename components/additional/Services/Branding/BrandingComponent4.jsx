import Image from "next/image";
import BrandingImage from "@/public/assets/Services/Branding/Branding-3.webp"

const BrandingComponent4 = () => {
  return (
    <div className="bg-black pt-10 md:pt-20 text-white flex flex-col justify-center items-center pb-10 border-none overflow-hidden">
      <h2 className="font-semibold">Next Level</h2>
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
          Brand Messaging
        </h2>
        <p className=" text-center pt-4 text-white/50">
          Effective brand messaging is key to communicating your
          <br className="hidden md:flex" /> brand story and values to your
          target audience.
        </p>
      </div>
      <div className="text-black bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex justify-center border-none mt-10 mx-4 md:mx-0">
        <div className="flex flex-col lg:flex-row h-full w-full lg:w-[70vw] items-center p-8">
          <div className="w-full lg:w-[60%] lg:px-0">
            <h2 className="text-lg lg:text-3xl font-bold text-center md:text-start mb-4">
              Connect the Brand with Your Audience
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-light text-black text-justify lg:leading-6">
                Our team of copywriters works with you to craft compelling and
                effective brand messaging that resonates with your customers and
                drives results for your business. We take into account your
                brand values, target audience, and industry trends to create
                messaging that truly represents your brand and helps you connect
                with your audience. At our branding agency in India, we use
                strategy to give you branding solutions.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-end mt-4 py-4 md:py-0">
            <Image
              className="rounded-lg bg-white"
              src={BrandingImage}
              alt="Build Your Own Digital Brand Image"
              height={350}
              width={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingComponent4;
