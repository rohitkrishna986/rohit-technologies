import Image from "next/image";
import SemImage from "@/public/assets/Services/Sem/Sem-1.gif";

const SemComponent2 = () => {
  return (
    <div className="h-full p-4 text-white bg-black flex justify-center border-none">
      <div className="flex flex-col lg:flex-row h-full lg:h-[80vh] w-full lg:w-[80vw] items-center py-8">
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
          <p className="font-light text-lg md:text-xl text-white/80 md:text-start text-center">
            With Our Expertise in SEO & Pay-Per-Click (PPC) Advertising
          </p>
          <h2 className="text-xl lg:text-4xl font-medium text-center md:text-start">
            Improve Online Visibility & Drive more Traffic to Your Website.
          </h2>
          <div className="flex flex-col gap-4">
            <p className="font-light text-white/80 text-justify lg:leading-8">
              Our team of experienced digital marketers will work with you to
              create a customized search engine marketing strategy tailored to
              your business goals and target audience. We use the latest tools
              and techniques to optimize your website for search engines and
              create effective PPC campaigns that drive results.
            </p>
          </div>
        </div>
        <div className="flex-1 md:hidden flex justify-start pt-8">
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
  );
};

export default SemComponent2;
