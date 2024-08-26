import Image from "next/image";
import GetQuoteButton from "../GetQuoteButton";

const HomeComponent2 = () => {
  return (
    <div className="lg:h-[37rem] text-white bg-black flex justify-center border-none">
      <div className="flex flex-col lg:flex-row h-full lg:h-[80vh] w-full lg:w-[85vw] items-center py-8">
        <div className="w-full lg:w-[50%] px-4 lg:px-0">
          <h2 className="text-2xl lg:text-5xl font-bold text-center md:text-start my-8">
            Build your Own Digital Brand
          </h2>
          <p className="font-light text-white/80 text-justify lg:leading-8">
            A technology-integrated digital marketing agency Based in India for
            web development, branding, social media advertising, search engine
            marketing, and IT infrastructure. We unlock your digital potential
            with cutting-edge solutions. Let&apos;s create something amazing
            together.
          </p>
          <div className="my-8 justify-center lg:justify-start flex gap-8">
            <button className="inline-flex h-11 px-5 items-center border justify-center rounded-full bg-white text-black hover:bg-black hover:text-white hover:border hover:border-white transition-all duration-300">
              Contact Us
            </button>
            <GetQuoteButton name="Get Quote" />
          </div>
        </div>
        <div className="flex-1 flex justify-center pb-20 md:pb-0">
          <Image
            className="rounded-lg"
            src="/assets/tech-img.jpg"
            alt="Build Your Own Digital Brand Image"
            height={350}
            width={350}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent2;
