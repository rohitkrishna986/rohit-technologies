import Image from "next/image";
import SmmImage from "@/public/assets/Services/Smm/Smm-1.gif"

const SmmComponent2 = () => {
  return (
    <div className="text-white bg-black flex justify-center border-none">
      <div className="flex flex-col lg:flex-row h-full lg:h-[80vh] w-full lg:w-[85vw] items-center py-8">
        <div className="w-full lg:w-[60%] px-4 lg:px-0">
          <h2 className="text-2xl lg:text-4xl font-bold text-center md:text-start my-8">
            Trusted Social Media Marketing India
          </h2>
          <p className="font-light text-white/80 text-justify lg:leading-8">
            We are one of the leading Social Media Marketing India. we
            understand today&apos;s consumers are no longer following a linear path
            to purchase - they&apos;re researching, comparing, and considering their
            options across multiple channels and touch-points. That&apos;s why we
            take a comprehensive approach to our campaigns, ensuring that every
            decision-maker involved in the buying and selling process is
            targeted with the right message at just the right time. With our
            expertise in delivering compelling content across various channels.
            our Social Media Marketing India strategies will help your brand to
            reach to the target audience through the right audience target.
          </p>
        </div>
        <div className="flex-1 flex justify-center py-8 md:py-0">
          <Image
            className="rounded-lg"
            src={SmmImage}
            alt="Build Your Own Digital Brand Image"
            height={350}
            width={350}
          />
        </div>
      </div>
    </div>
  );
};

export default SmmComponent2;
