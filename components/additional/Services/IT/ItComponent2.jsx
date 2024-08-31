import Image from "next/image";
import GetQuoteButton from "../../GetQuoteButton";
import ITImage from "@/public/assets/Services/IT/IT-1.gif";

const ItComponent2 = () => {
  return (
    <div className="text-white bg-black flex justify-center border-none">
      <div className="flex flex-col lg:flex-row h-full lg:h-[80vh] w-full lg:w-[85vw] items-center py-8">
        <div className="w-full lg:w-[60%] px-4 lg:px-0">
          <h2 className="text-2xl lg:text-4xl font-bold text-center md:text-start my-8">
            Reliable & Efficient IT Infrastructure Services in India
          </h2>
          <p className="font-light text-white/80 text-justify lg:leading-8">
            At Our Technology Solutions, we understand that having a reliable
            and efficient IT infrastructure is crucial to support your business
            operations. That&apos;s why we offer a range of comprehensive IT
            infrastructure solutions designed to meet the unique needs of your
            business. Our team of experienced IT professionals can help you
            build, manage, and maintain a robust IT infrastructure that supports
            your business goals and objectives, and keeps you up and running no
            matter what. Server and Storage Solutions: Deploy and Manage Servers
            and Storage That Meet Your Business Requirements
          </p>
          <p className="font-light text-white/80 text-justify lg:leading-8">
            Our team can help you deploy and manage servers that meet your
            business requirements, including file servers, application servers,
            and web servers. We also offer a range of storage solutions,
            including hard drives, solid-state drives, and network-attached
            storage, to ensure that your data is always secure and accessible.
          </p>
          <div className="my-8 justify-center lg:justify-start flex gap-8">
            <GetQuoteButton name="Contact us" />
          </div>
        </div>
        <div className="flex-1 flex justify-center px-4 md:px-0 pb-5 md:pb-0">
          <Image
            className="rounded-lg"
            src={ITImage}
            alt="Build Your Own Digital Brand Image"
            height={500}
            width={450}
          />
        </div>
      </div>
    </div>
  );
};

export default ItComponent2;
