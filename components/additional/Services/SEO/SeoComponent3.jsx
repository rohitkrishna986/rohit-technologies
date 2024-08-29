import Image from "next/image";
import SeoImage from "@/public/assets/Services/Seo/Seo-2.gif";
import { MdAnalytics, MdContentPasteSearch } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import GetQuoteButton from "../../GetQuoteButton";

const SeoComponent3 = () => {
  return (
    <div className="h-full p-4 pt-5 md:pt-16 text-white bg-black flex justify-center border-none">
      <div className="flex flex-col lg:flex-row h-full lg:h-[80vh] w-full lg:w-[80vw] items-center py-8">
        <div className="flex-1 hidden md:flex justify-start">
          <Image
            className="rounded-lg "
            src={SeoImage}
            alt="Build Your Own Digital Brand Image"
            height={600}
            width={500}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4 lg:w-[50%] lg:px-0">
          <h2 className="text-xl lg:text-4xl font-medium text-center md:text-start">
            Advanced Techniques to Manage Your Online Reputation
          </h2>
          <div className="flex flex-col gap-4">
            <p className="font-light my-2 text-white/80 text-justify lg:leading-8">
              Rohit Tech advanced Search Engine Optimisation in India help
              techniques to improve your website&apos;s authority and
              trustworthiness, which can lead to increased website traffic and
              conversions. Our techniques include
            </p>
            <ul className="pb-4 md:pb-0">
              <li className="flex gap-3 pt-3 items-center">
                <span className="text-blue-600">
                  <MdContentPasteSearch />
                </span>
                <span className="text-white/80">
                  <span className="font-semibold text-white">
                    Keyword Research :
                  </span>{" "}
                  We&apos;ll identify the most relevant and high-traffic
                  keywords for your business, ensuring that your content for the
                  right search terms.
                </span>
              </li>
              <li className="flex gap-3 pt-3 items-center">
                <span className="text-blue-600">
                  <FaLink />
                </span>
                <span className="text-white/80">
                  <span className="font-semibold text-white">
                    Link Building :
                  </span>{" "}
                  We&apos;ll build high-quality backlinks to your website from
                  authoritative websites, improving your website&apos;s domain
                  authority and search engine rankings.
                </span>
              </li>
              <li className="flex gap-3 pt-3 items-center">
                <span className="text-blue-600">
                  <MdAnalytics />
                </span>
                <span className="text-white/80">
                  <span className="font-semibold text-white">
                    Analytics & Reporting :
                  </span>{" "}
                  We&apos;ll use advanced analytics tools to track your
                  website&apos;s performance and provide detailed reports on
                  your SEO progress.
                </span>
              </li>
            </ul>
            <div className="my-4 justify-center lg:justify-start flex ">
            <GetQuoteButton name="Get Quote" />
          </div>
          </div>
        </div>
        <div className="flex-1 md:hidden flex justify-start pt-10">
          <Image
            className="rounded-lg "
            src={SeoImage}
            alt="Build Your Own Digital Brand Image"
            height={600}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default SeoComponent3;
