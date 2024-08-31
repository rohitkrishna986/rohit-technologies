import Image from "next/image";
import SmmImage from "@/public/assets/Services/Smm/Smm-2.gif";
import { FaPencilAlt } from "react-icons/fa";

const SmmComponent3 = () => {
  return (
    <div className="text-white bg-black flex justify-center border-none">
      <div className="flex flex-col lg:flex-row h-full lg:h-[80vh] w-full lg:w-[85vw] py-8">
        <div className="md:w-[50%] w-full flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl text-center">
            Capture Clients Throughout their Journey
          </h1>
          <p className="text-white/50 my-4 text-center">
            Drive Real Results for Your Business.
          </p>
          <Image src={SmmImage} width={600} height={600} alt="Smm Image" className="px-4 md:px-0"/>
        </div>
        <div className="flex-1 pt-8 px-4 md:px-0 overflow-y-scroll scrollbar-none">
          <ul className="pb-4 md:pb-0">
            <li className="flex gap-3 pt-3 items-center">
              <span className="text-blue-600">
                <FaPencilAlt />
              </span>
              <span className="text-white/80 text-justify">
                <span className="font-semibold text-white">
                  Increased Brand Awareness:
                </span>{" "}
                Social media is a powerful tool for reaching new audiences and
                increasing your brand&apos;s visibility. Our team will help you
                create a social media strategy that amplifies your brand&apos;s
                message and gets you in front of the right people.
              </span>
            </li>
            <li className="flex gap-3 pt-3 items-center">
              <span className="text-blue-600">
                <FaPencilAlt />
              </span>
              <span className="text-white/80 text-justify">
                <span className="font-semibold text-white">
                  Improved Audience Engagement:
                </span>{" "}
                Engaging with your followers is key to building a loyal
                community around your brand. Our team will work with you to
                create content that resonates with your audience, encourages
                interaction, and drives engagement.
              </span>
            </li>
            <li className="flex gap-3 pt-3 items-center">
              <span className="text-blue-600">
                <FaPencilAlt />
              </span>
              <span className="text-white/80 text-justify">
                <span className="font-semibold text-white">
                  Higher Website Traffic:
                </span>{" "}
                Social media can be a powerful driver of website traffic, but
                only if it&apos;s done right. We&apos;ll help you create
                compelling social media posts that entice your followers to
                visit your website and explore your offerings.
              </span>
            </li>
            <li className="flex gap-3 pt-3 items-center">
              <span className="text-blue-600">
                <FaPencilAlt />
              </span>
              <span className="text-white/80 text-justify">
                <span className="font-semibold text-white">
                  Stronger Brand Reputation:
                </span>{" "}
                Social media gives you the opportunity to showcase your
                brand&apos;s personality and values, and build a reputation as a
                thought leader in your industry. Our team will help you create
                content that establishes your brand as an authority and a
                trustworthy source of information.
              </span>
            </li>
            <li className="flex gap-3 pt-3 items-center">
              <span className="text-blue-600">
                <FaPencilAlt />
              </span>
              <span className="text-white/80 text-justify">
                <span className="font-semibold text-white">
                  Increased Conversions:
                </span>{" "}
                At the end of the day, social media is about driving real
                results for your business. Whether you&apos;re looking to
                increase sales, generate leads, or boost your online presence,
                our social media marketing services can help you achieve your
                goals.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmmComponent3;
