import { Modal, ModalTrigger } from "@/components/ui/animated-modal";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ServicesComponent1 = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center py-10 border-none overflow-hidden">
      <h2 className="font-semibold">Our Services</h2>
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
          Digital Marketing Services in India
        </h2>
        <p className=" text-center pt-4 text-white/50">
          Elevate your business online with Rohit. Designed for digital
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-3 w-[80%] mt-10">
        {data.map((card, index) => (
          <div className="max-w-auto w-full group/card" key={index}>
            <div
              className={cn(
                " cursor-pointer overflow-hidden group relative card h-96 rounded-md shadow-xl max-w-full mx-auto flex flex-col justify-between backgroundImage p-4",
                `bg-cover bg-center`
              )}
              style={{ backgroundImage: `url(${card.img})` }}
            >
              <div className="hidden group-hover:flex h-full flex-col justify-between">
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-90"></div>
                <div className="flex flex-row items-center space-x-4 z-10">
                  <div className="flex flex-col">
                    <p className="font-normal text-base text-gray-50 relative z-10">
                      {card.title}
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-center z-10">
                  <Modal>
                    <ModalTrigger className="bg-transparent text-white flex justify-center group/modal-btn">
                      <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        <span className="flex">
                          View more
                          <span className="text-2xl">
                            <MdOutlineKeyboardArrowRight />
                          </span>
                        </span>
                      </span>
                      <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        <Link
                          href={card.link}
                          className="text-2xl rounded-full border border-white p-2"
                        >
                          <MdOutlineKeyboardArrowRight />
                        </Link>
                      </div>
                    </ModalTrigger>
                  </Modal>
                </div>
                <div className="text content">
                  <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                    {card.name}
                  </h1>
                  <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    title: "From Launch to Success",
    name: "Website Development",
    desc: "Process of Creating User-Focused Websites",
    img: "https://www.zolvotech.com/wp-content/uploads/2023/03/Website-Development.png",
    link: "/services/web-development",
  },
  {
    title: "Be Visible",
    name: "SEO",
    desc: "Ranking Higher in the Organic Search Results",
    img: "https://www.zolvotech.com/wp-content/uploads/2023/03/Search-Engine-Optimisation.png",
    link: "/services/search-engine-optimisation",
  },
  {
    title: "Reach to Your Target Audience",
    name: "Social Media Marketing",
    desc: "From Awareness to Conversion",
    img: "https://www.zolvotech.com/wp-content/uploads/2023/03/Social-Media-Marketing-2.png",
    link: "/services/social-media-marketing",
  },
  {
    title: "Turning Clicks into Customers",
    name: "Search Engine Marketing",
    desc: "Smart Strategies for Pay-Per-Click Success",
    img: "https://www.zolvotech.com/wp-content/uploads/2023/03/Search-Engine-Marketing-1.png",
    link: "/services/search-engine-marketing",
  },
  {
    title: "The Art and Science of Design",
    name: "Branding",
    desc: "Research-Driven Process Delivers Measurable Outcomes",
    img: "https://www.zolvotech.com/wp-content/uploads/2023/03/Branding.png",
    link: "/services/branding-content-writing",
  },
  {
    title: "Strengthen Your Business",
    name: "IT Infrastructure",
    desc: "Get the Support You Need to Build and Maintain",
    img: "https://www.zolvotech.com/wp-content/uploads/2023/03/IT-Infrastructure-Solutions.png",
    link: "/services/it-infrastructure-solutions",
  },
];

export default ServicesComponent1;
