import Image from "next/image";
import WebImage from "@/public/assets/Services/WebDevelopment/Web-Development-4.gif";
import { MdOutlineModeEdit, MdOutlineWeb } from "react-icons/md";
import { FaEdit, FaOpencart } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";

const DevelopmentComponent5 = () => {
  return (
    <div className="h-full p-4 pt-5 md:pt-16 text-white bg-black flex justify-center border-none">
      <div className="flex flex-col lg:flex-row h-full lg:h-[80vh] w-full lg:w-[80vw] items-center py-8">
        <div className="flex-1 hidden md:flex justify-start">
          <Image
            className="rounded-lg "
            src={WebImage}
            alt="Build Your Own Digital Brand Image"
            height={600}
            width={500}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4 lg:w-[50%] lg:px-0">
          <h2 className="text-xl lg:text-4xl font-medium text-center md:text-start">
            Crafting Customized Web Solutions to Enhance Your Online Presence
          </h2>
          <div className="flex flex-col gap-4">
            <p className="font-light my-2 text-white/80 text-justify lg:leading-8">
              Our web development services are designed to be tailored to your
              specific needs. We offer a range of solutions that can help take
              your digital presence to the next level.
            </p>
            <ul className="pb-10 md:pb-0">
              <li className="flex gap-3 pt-3 items-center">
                <span className="text-blue-600">
                  <MdOutlineModeEdit />
                </span>
                Custom Website Design and Development
              </li>
              <li className="flex gap-3 pt-3 items-center">
                <span className="text-blue-600">
                  <FaOpencart />
                </span>
                E-commerce Platforms
              </li>
              <li className="flex gap-3 pt-3 items-center">
                <span className="text-blue-600">
                  <CiMobile3 />
                </span>
                Mobile App Development
              </li>
              <li className="flex gap-3 pt-3 items-center">
                <span className="text-blue-600">
                  <MdOutlineWeb />
                </span>
                Web Application Development
              </li>
              <li className="flex gap-3 pt-3 items-center">
                <span className="text-blue-600">
                  <FaEdit/>
                </span>
                Content Management Systems
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 md:hidden flex justify-start">
          <Image
            className="rounded-lg "
            src={WebImage}
            alt="Build Your Own Digital Brand Image"
            height={600}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default DevelopmentComponent5;
