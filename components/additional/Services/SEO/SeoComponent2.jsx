import SeoImage from "@/public/assets/Services/Seo/Seo-1.gif";
import Image from "next/image";

const SeoComponent2 = () => {
  return (
    <div className="text-white bg-black flex justify-center pb-10 border-none">
      <div className="flex flex-col lg:flex-row h-full lg:h-[80vh] w-full items-center lg:w-[85vw] py-8">
        <div className="w-full lg:w-[50%] px-4 lg:px-0">
          <h2 className="text-md text-center md:text-start lg:text-3xl font-bold my-8">
            What is Search Engine Optimisation ?
          </h2>
          <p className="font-light text-white/80 text-justify lg:leading-8">
            Search Engine Optimisation in India (SEO) is the practice of
            optimizing websites to improve their visibility and ranking in
            search engine results pages. SEO involves a combination of on-page
            and off-page techniques, including keyword research, content
            optimization, link building, and technical optimization. The goal of
            SEO is to drive organic traffic to websites and improve their
            conversion rates by attracting and engaging relevant audiences. As
            search engines continue to evolve, SEO practices must also adapt to
            ensure optimal results.
          </p>
        </div>
        <div className="flex-1 flex justify-center px-4 md:px-0 pt-6 md:pt-0 items-center">
          <Image
            className="rounded-lg bg-gray-900"
            src={SeoImage}
            width={480}
            height={360}
            alt="seo-image"
          />
        </div>
      </div>
    </div>
  );
};

export default SeoComponent2;
