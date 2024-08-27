import Image from "next/image";
import WebImage from "@/public/assets/Services/WebDevelopment/Web-Development-2.gif"

const DevelopmentComponent3 = () => {
  return (
    <div className="h-full p-4 pt-5 md:pt-16 text-white bg-black flex justify-center border-none">
      <div className="flex flex-col lg:flex-row h-full lg:h-[80vh] w-full lg:w-[80vw] items-center py-8">
        <div className="flex-1 hidden md:flex justify-start">
          <Image
            className="rounded-lg "
            src={WebImage}
            alt="Build Your Own Digital Brand Image"
            height={450}
            width={450}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4 lg:w-[60%] lg:px-0">
          <h2 className="text-xl lg:text-4xl font-medium text-center md:text-start">
            Leading Web Development Company in India for Businesses of All
            Sizes.
          </h2>
          <div className="flex flex-col gap-4">
            <p className="font-light text-white/80 text-justify lg:leading-8">
              We recognize the distinct nature of each business, and that&apos;s
              precisely why our web development services in India are crafted
              with versatility in mind. Our expertise stretches from crafting
              straight forward brochure websites to building intricate web
              applications and robust e-commerce platforms. Our team is equipped
              with the necessary skills and know-how to bring your unique vision
              to life. Our web development solutions are not just services, they
              are a pathway to elevate your digital presence.
            </p>
          </div>
        </div>
        <div className="flex-1 md:hidden flex justify-start">
          <Image
            className="rounded-lg "
            src={WebImage}
            alt="Build Your Own Digital Brand Image"
            height={450}
            width={450}
          />
        </div>
      </div>
    </div>
  );
};

export default DevelopmentComponent3;
