import Image from "next/image";
import BrandingImage from "@/public/assets/Services/Branding/Branding-2.gif";

const BrandingComponent3 = () => {
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
            Brochure, Letterhead & Business Cards
          </h2>
          <div className="flex flex-col gap-4">
            <p className="font-light text-white/80 text-justify lg:leading-8">
              Consistency is key when it comes to branding, and that&apos;s why
              we offer a range of branding collateral services including
              brochure, letterhead, and business card design. We ensure your
              brand message is clear and cohesive across all touchpoints, from
              your website to your marketing materials, creating a consistent
              and professional image for your brand.
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

export default BrandingComponent3;
