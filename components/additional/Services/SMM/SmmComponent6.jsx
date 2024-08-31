import Image from "next/image";
import SmmImage from "@/public/assets/Services/Smm/Smm-4.gif";

const SmmComponent6 = () => {
  return (
    <div className="h-full p-4 pt-5 md:pt-10 text-white bg-black flex justify-center border-none">
      <div className="flex flex-col lg:flex-row h-full w-full lg:w-[80vw] items-center py-8">
        <div className="flex-1 hidden md:flex justify-start">
          <Image
            className="rounded-lg "
            src={SmmImage}
            alt="Build Your Own Digital Brand Image"
            height={550}
            width={550}
          />
        </div>
        <div className="w-full flex flex-col justify-center gap-4 lg:w-[50%] lg:px-0">
          <h2 className="text-xl lg:text-4xl font-medium text-center md:text-start">
            Social Media Analytics
          </h2>
          <div className="flex flex-col gap-4">
            <p className="font-light text-white/80 text-justify lg:leading-8">
              Social media analytics is the process of analyzing data from
              social media platforms to gain insights into audience behavior,
              campaign performance, and overall effectiveness of social media
              marketing efforts. It allows businesses to make informed decisions
              and optimize their marketing strategy to achieve better results.
            </p>
            <p className="font-light text-white/80 text-justify lg:leading-8">
              Understanding the metrics and insights provided by social media
              analytics is crucial for any business looking to succeed in
              today&apos;s digital landscape. By analyzing engagement rates, click-
              through rates, conversion rates, and other key performance
              indicators, businesses can gain a deeper understanding of their
              audience and tailor their messaging to meet their needs. Social
              media analytics also allows businesses to track the success of
              their campaigns over time and make adjustments as needed. By
              identifying trends and patterns in audience behavior, businesses
              can refine their targeting, content strategy, and overall approach
              to achieve better results.
            </p>
          </div>
        </div>
        <div className="flex-1 md:hidden flex justify-start">
          <Image
            className="rounded-lg mt-10"
            src={SmmImage}
            alt="Build Your Own Digital Brand Image"
            height={450}
            width={450}
          />
        </div>
      </div>
    </div>
  );
};

export default SmmComponent6;
