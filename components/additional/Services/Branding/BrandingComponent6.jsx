import Image from "next/image";
import BrandingImage from "@/public/assets/Services/Branding/Branding-5.gif";

const BrandingComponent6 = () => {
  return (
    <div className="h-full p-4 pt-10 text-white bg-black flex justify-center border-none">
      <div className="flex flex-col lg:flex-row h-full w-full lg:w-[80vw] items-center py-8">
        <div className="flex-1 hidden md:flex justify-start">
          <Image
            className="rounded-lg "
            src={BrandingImage}
            alt="Build Your Own Digital Brand Image"
            height={450}
            width={450}
          />
        </div>
        <div className="w-full flex flex-col justify-center gap-4 lg:w-[60%] lg:px-0">
          <h2 className="text-xl lg:text-4xl font-medium text-center md:text-start">
            Marketing Collaterals
          </h2>
          <div className="flex flex-col gap-4">
            <p className="font-light text-white/80 text-justify lg:leading-8">
              From social media graphics to email campaigns, we offer a range of
              marketing collateral services that can help you reach your target
              audience and drive conversions for your business. We take into
              account your business objectives, target audience, and industry
              trends to create customized marketing collateral that truly
              represents your brand and helps you achieve your goals. At Rohit,
              we take a personalized approach to branding, working closely with
              our clients to understand their unique needs and goals. Whether
              you&apos;re a start-up looking to establish a new brand or an
              established business seeking to refresh your brand, we&apos;re here to
              help you create a brand that truly stands out. Contact us today to
              learn more about our branding services and how we can help your
              business succeed.
            </p>
          </div>
        </div>
        <div className="flex-1 md:hidden flex justify-start">
          <Image
            className="rounded-lg mt-10"
            src={BrandingImage}
            alt="Build Your Own Digital Brand Image"
            height={450}
            width={450}
          />
        </div>
      </div>
    </div>
  );
};

export default BrandingComponent6;
