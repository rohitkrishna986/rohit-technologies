import { FaCarBattery } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { GiCctvCamera } from "react-icons/gi";
import { IoIosLock } from "react-icons/io";
import { MdOutlineVideoChat } from "react-icons/md";

const ItComponent3 = () => {
  return (
    <>
      <div className="bg-black text-white flex flex-col justify-center items-center md:mt-8 py-10 border-none overflow-hidden">
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
            IT Infrastructure Services
          </h2>
          <p className=" text-center pt-4 text-white/50">
            We Provide Various IT Services
          </p>
        </div>
      </div>
      <div className="bg-black flex flex-col gap-5 justify-center items-center overflow-hidden mb-8 my-4">
        <div className=" w-[60%] bg-black flex flex-col md:flex-row gap-5 justify-between items-center">
          <div className="w-[300px] md:w-[400px] h-[400px] border bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex flex-col items-center p-5">
            <span className="text-blue-600 bg-white p-4 rounded-full text-3xl">
              <GiCctvCamera />
            </span>
            <h2 className="text-black font-semibold py-4 text-center">
              Surveillance and Access Control Systems
            </h2>
            <p className="text-center text-black text-sm">
              We offer surveillance and access control solutions to help you
              protect your business from internal and external threats. Our
              experts can help you design and implement a system that suits your
              business needs and ensures that your premises, assets, and
              personnel are secure.
            </p>
          </div>
          <div className="w-[300px] md:w-[400px] h-[400px] border bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex flex-col items-center p-5">
            <span className="text-blue-600 bg-white p-4 rounded-full text-3xl">
              <FaPhone />
            </span>
            <h2 className="text-black font-semibold py-4 text-center">
              IP/Analog Telephone Solutions
            </h2>
            <p className="text-center text-black text-sm">
              Our team can help you deploy and manage IP/Analog Telephone
              Solutions that support your business communication needs. We offer
              a range of solutions that include IP-based phone systems, analogue
              telephone systems, and Voice over IP (VoIP) systems.
            </p>
          </div>
          <div className="w-[300px] md:w-[400px] h-[400px] border bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex flex-col items-center p-5">
            <span className="text-blue-600 bg-white p-4 rounded-full text-3xl">
              <IoIosLock />
            </span>
            <h2 className="text-black font-semibold py-4">
              IT Security Solutions
            </h2>
            <p className="text-center text-black text-sm">
              We understand that protecting your business from cyber threats is
              critical to its success. Our team can help you implement security
              solutions such as firewalls, antivirus software, and intrusion
              detection systems to ensure that your data and systems are always
              protected from threats.
            </p>
          </div>
        </div>
        <div className="w-[60%] bg-black flex flex-col md:flex-row gap-5 justify-between items-center">
          <div className="w-[300px] md:w-[400px] h-[400px] border bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex flex-col items-center p-5">
            <span className="text-blue-600 bg-white p-4 rounded-full text-3xl">
              <FaComputer />
            </span>
            <h2 className="text-black font-semibold py-4">
              Computer Network Solutions
            </h2>
            <p className="text-center text-black text-sm">
              Our experts can help you design and implement a robust and secure
              network infrastructure that meets your business needs. We offer a
              range of solutions that include network design and implementation,
              wireless network solutions, and network security solutions.
            </p>
          </div>
          <div className="w-[300px] md:w-[400px] h-[400px] border bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex flex-col items-center p-5">
            <span className="text-blue-600 bg-white p-4 rounded-full text-3xl">
              <FaCarBattery />
            </span>
            <h2 className="text-black font-semibold py-4">UPS Solutions</h2>
            <p className="text-center text-black text-sm">
              We offer a range of UPS solutions to ensure that your business
              operations continue without interruption in the event of a power
              outage. Our experts can help you design and implement a solution
              that suits your business needs.
            </p>
          </div>
          <div className="w-[300px] md:w-[400px] h-[400px] border bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex flex-col items-center p-5">
            <span className="text-blue-600 bg-white p-4 rounded-full text-3xl">
              <MdOutlineVideoChat />
            </span>
            <h2 className="text-black font-semibold py-4">
              Video Conferencing Solutions
            </h2>
            <p className="text-center text-black text-sm">
              Our team can help you deploy and manage video conferencing
              solutions such as Microsoft Teams, Slack, and Zoom to improve
              communication and collaboration among your employees.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItComponent3;
