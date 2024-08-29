import Image from "next/image";
import SeoImage from '@/public/assets/Services/Seo/Seo-3.gif'

const SeoComponent4 = () => {
  return (
    <div className="text-white bg-black flex justify-center pb-10 border-none">
      <div className="flex flex-col lg:flex-row h-full lg:h-[80vh] w-full items-center lg:w-[85vw] py-8">
        <div className="w-full lg:w-[50%] px-4 lg:px-0">
          <h2 className="text-md text-center md:text-start lg:text-3xl font-bold my-8">
            Make Your Website Great with the premier Search Engine Optimisation
            in India
          </h2>
          <p className="font-light text-white/80 text-justify lg:leading-8">
            We&apos;re committed to helping you succeed online. Our team of
            experienced Search Engine Optimisation in India professionals has a
            proven track record of success, and we&apos;re dedicated to providing you
            with the personalized attention and support you need to achieve your
            business goals. Contact us today to learn more about how Rohit Tech
            Search Engine Optimisation in India can help you improve your online
            visibility and take your business to the next level. Our goal as a
            trusted Search Engine Optimisation in India is to make your online
            presence as strong as possible so you can achieve unmatched success.
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

export default SeoComponent4;
