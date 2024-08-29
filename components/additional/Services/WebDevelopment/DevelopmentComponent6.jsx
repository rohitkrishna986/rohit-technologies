import { FaUserGroup } from "react-icons/fa6";
import { MdDesignServices, MdDevices } from "react-icons/md";
import { TbBrandSpeedtest } from "react-icons/tb";
import { GrDeploy } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";

const DevelopmentComponent6 = () => {
  return (
    <>
      <div className="bg-black text-white flex flex-col justify-center items-center py-10 border-none overflow-hidden">
        <h2 className="font-semibold">Our Process</h2>
        <div className="w-[40rem] h-10 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <div className="">
          <h2 className="text-xl md:text-4xl text-center font-semibold">
            Our Seamless Web Development Process
          </h2>
          <p className=" text-center pt-4 text-white/50">
            we create immersive digital experiences that captivate, motivate,
            and deliver <br /> tangible results, with a focus on delivering
            high-performing websites
          </p>
        </div>
      </div>
      <div className="bg-black flex flex-col gap-5 justify-center items-center overflow-hidden p-2 md:p-0 py-5">
        <div className=" w-[60%] bg-black flex flex-col md:flex-row gap-5 justify-between items-center">
          <div className="w-[350px] h-[350px] border bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex flex-col gap-5 justify-center items-center hover:-translate-y-1 transition-all duration-300 p-5">
            <span className="text-blue-600 bg-white p-4 rounded-full text-3xl">
              <FaUserGroup />
            </span>
            <h2 className="text-black font-semibold">Planning</h2>
            <p className="text-center text-black text-sm">
              We begin by thoroughly understanding your needs and goals for your
              website, as well as conducting a comprehensive study of your
              competitors to ensure that your website stands out.
            </p>
          </div>
          <div className="w-[350px] h-[350px] border bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex flex-col gap-5 justify-center items-center hover:-translate-y-1 transition-all duration-300 p-5">
            <span className="text-blue-600 bg-white p-4 rounded-full text-3xl">
              <MdDesignServices />
            </span>
            <h2 className="text-black font-semibold">Design</h2>
            <p className="text-center text-black text-sm">
              Our team of expert designers will work with you to create visually
              stunning wireframes, mockups, & designs that align with your
              brand&apos;s aesthetic & effectively communicate your message to
              your audience.
            </p>
          </div>
          <div className="w-[350px] h-[350px] border bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex flex-col gap-5 justify-center items-center hover:-translate-y-1 transition-all duration-300 p-5">
            <span className="text-blue-600 bg-white p-4 rounded-full text-3xl">
              <MdDevices />
            </span>
            <h2 className="text-black font-semibold">Development</h2>
            <p className="text-center text-black text-sm">
              Our skilled developers will then take your approved design and
              turn it into a fully functional website, ensuring that all the
              necessary functionality is properly integrated and tested.
            </p>
          </div>
        </div>
        <div className="w-[60%] bg-black flex flex-col md:flex-row gap-5 justify-between items-center">
          <div className="w-[350px] h-[350px] border bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex flex-col gap-5 justify-center items-center hover:-translate-y-1 transition-all duration-300 p-5">
            <span className="text-blue-600 bg-white p-4 rounded-full text-3xl">
              <TbBrandSpeedtest />
            </span>
            <h2 className="text-black font-semibold">Testing</h2>
            <p className="text-center text-black text-sm">
              Our team conducts thorough testing of your website to ensure that
              it functions properly & is optimized for search engines,
              delivering a smooth user experience.
            </p>
          </div>
          <div className="w-[350px] h-[350px] border bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex flex-col gap-5 justify-center items-center hover:-translate-y-1 transition-all duration-300 p-5">
            <span className="text-blue-600 bg-white p-4 rounded-full text-3xl">
              <GrDeploy />
            </span>
            <h2 className="text-black font-semibold">Launch</h2>
            <p className="text-center text-black text-sm">
              Once your website is complete and thoroughly tested, we will
              launch it and make it live for the public to access, ensuring a
              seamless and successful launch.
            </p>
          </div>
          <div className="w-[350px] h-[350px] border bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex flex-col gap-5 justify-center items-center hover:-translate-y-1 transition-all duration-300 p-5">
            <span className="text-blue-600 bg-white p-4 rounded-full text-3xl">
              <IoMdSettings />
            </span>
            <h2 className="text-black font-semibold">Maintenance</h2>
            <p className="text-center text-black text-sm">
              we offer ongoing maintenance & updates to ensure that your website
              remains functional, secure, & up-to-date, providing you with peace
              of mind & freeing up your time to focus on your business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevelopmentComponent6;
