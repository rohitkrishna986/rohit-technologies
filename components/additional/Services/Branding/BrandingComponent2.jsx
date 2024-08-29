import Image from "next/image";
import GetQuoteButton from "../../GetQuoteButton";
import BrandingImage from "@/public/assets/Services/Branding/Branding-1.gif";

const BrandingComponent2 = () => {
  return (
    <div className="text-white bg-black flex justify-center border-none">
      <div className="flex flex-col lg:flex-row h-full lg:h-[80vh] w-full lg:w-[85vw] items-center py-8">
        <div className="w-full lg:w-[60%] px-4 lg:px-0">
          <h2 className="text-2xl lg:text-4xl font-bold text-center md:text-start my-8">
            Innovative Branding Solutions Powered by Technology and Creativity
          </h2>
          <p className="font-light text-white/80 text-justify lg:leading-8">
            At Rohit Tech, we believe that branding is much more than just a logo or
            a tagline. It&apos;s a comprehensive strategy that should reflect your
            company&apos;s values, goals, and personality. That&apos;s why we offer
            innovative branding solutions that are powered by a unique
            combination of technology and creativity. Our team of experts uses
            the latest tools and techniques to create branding strategies that
            are not only visually stunning, but also strategically sound. We
            work closely with our clients to understand their business and their
            audience, and to develop solutions that are tailored to their
            specific needs. Whether you&apos;re looking to refresh your brand
            identity or create a completely new one, we have the expertise and
            the creativity to help you stand out. With the skilled touch of our
            experienced team at the top branding agency in India, you can bring
            out the best in your brand.
          </p>
          <div className="my-8 justify-center lg:justify-start flex gap-8">
            <GetQuoteButton name="Get Quote" />
          </div>
        </div>
        <div className="flex-1 flex justify-center pb-5 md:pb-0">
          <Image
            className="rounded-lg"
            src={BrandingImage}
            alt="Build Your Own Digital Brand Image"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default BrandingComponent2;
