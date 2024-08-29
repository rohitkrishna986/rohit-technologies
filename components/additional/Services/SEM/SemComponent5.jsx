import SemImage from "@/public/assets/Services/Sem/Sem-4.gif"
import Image from "next/image";

const SemComponent5 = () => {
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
          Remarketing
        </h2>
        <p className=" text-center pt-4 text-white/50">
          Our remarketing services involve creating targeted ad campaigns that
          are
          <br className="hidden md:flex" /> designed to reach people who have
          previously visited your website.
        </p>
      </div>
      <div className="text-black bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex justify-center border-none mt-10 mx-4 md:mx-0">
        <div className="flex flex-col lg:flex-row h-full w-full lg:w-[70vw] items-center p-8">
          <div className="w-full lg:w-[60%] lg:px-0">
            <h2 className="text-lg lg:text-2xl font-medium text-center md:text-start mb-4">
              Retarget the People who have Previously Visited Your Website
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-light text-black text-justify lg:leading-6">
                We will create custom audiences based on your website visitors
                and create ad campaigns that are tailored to their interests and
                behaviors. Our team will continuously monitor and optimize your
                remarketing campaigns to ensure that you are reaching the right
                people at the right time.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-end mt-4 py-4 md:py-0">
            <Image
              className="rounded-lg bg-white"
              src={SemImage}
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

export default SemComponent5;
