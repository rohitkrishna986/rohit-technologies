import Image from "next/image";

const DevelopmentComponent4 = () => {
  return (
    <div className="py-10 bg-black">
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
          Build a Website that Truly Reflects Your Brand
          </h2>
        </div>
      </div>
      <div className="h-full p-4 pt-10 text-white bg-black flex justify-center border-none">
        <div className="flex flex-col lg:flex-row h-full w-full lg:w-[80vw] items-center py-2">
          <div className="flex-1 hidden md:flex justify-start">
            <Image
              className="rounded-lg "
              src="/assets/services/WebDevelopment/web-Development-Company-3.png"
              alt="Build Your Own Digital Brand Image"
              height={450}
              width={450}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-4 lg:w-[60%] lg:px-0">
            <div className="flex flex-col gap-4">
              <p className="font-light text-white/80 text-justify lg:leading-8">
                Your website is often the first point of contact for potential
                customers, and it&apos;s essential that it accurately conveys
                your brand&apos;s personality, values, and offerings.
                That&apos;s why we offer custom website design services that are
                tailored to meet the unique needs of each of our clients. Our
                team of talented designers and developers work closely with you
                to understand your brand&apos;s personality, target audience,
                and goals. We then use this knowledge to create a visually
                stunning and engaging website that truly represents your brand.
              </p>
              <p className="font-light text-white/80 text-justify lg:leading-8">
                Our approach to website design is centered around creating a
                seamless user experience. We focus on creating intuitive
                navigation, engaging visuals, and clear messaging to ensure that
                your website visitors have a positive and memorable experience.
              </p>
            </div>
          </div>
          <div className="flex-1 md:hidden flex pt-10 justify-start">
            <img
              className="rounded-lg "
              src="/assets/services/WebDevelopment/web-Development-Company-3.png"
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

export default DevelopmentComponent4;
