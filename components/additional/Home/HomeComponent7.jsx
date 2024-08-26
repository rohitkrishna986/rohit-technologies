import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HomeComponent7 = () => {
  return (
    <>
      <div className="bg-black text-white flex flex-col justify-center items-center pb-10 border-none">
        <h2 className="font-semibold">Rated 4.9 of 5</h2>
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
            See What Our Clients Say About Us
          </h2>
          <p className=" text-center pt-4 text-white/50">
            Don&apos;t take us at our word
          </p>
        </div>
        <div className="my-20 w-[80%] bg-black flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="w-[350px] h-[350px] border border-white/50 rounded-2xl flex flex-col justify-between items-center hover:-translate-y-2 transition-all duration-300 p-5">
            <p className="text-center text-white/80 text-sm">
              "Team Rohit&apos;s SMM services have taken my business to the next
              level. Their team was creative, strategic, and highly responsive
              to my needs. They helped me develop a social media presence that
              aligns perfectly with my brand & business goals. My social media
              channels have seen an increase in engagement & followers,
              resulting in more leads & sales."
            </p>
            <div className="flex">
              <img src="/assets/star4.svg" width={20} />
              <img src="/assets/star4.svg" width={20} />
              <img src="/assets/star4.svg" width={20} />
              <img src="/assets/star4.svg" width={20} />
            </div>
            <h2 className="text-white font-semibold pb-4">Tommy</h2>
          </div>
          <div className="w-[350px] h-[350px] border border-white/50 rounded-2xl flex flex-col justify-between items-center hover:-translate-y-2 transition-all duration-300 p-5">
            <p className="text-center text-white/80 text-sm">
              "Team Rohit did an exceptional job with my company&apos;s
              branding. They were attentive, responsive, and took the time to
              understand my vision & goals. They provided me with a variety of
              design options & made sure that the final product accurately
              reflected my brand&apos;s identity. My brand now stands out in the
              market & resonates with the target audience."
            </p>
            <div className="flex">
              <img src="/assets/star4.svg" width={20} />
              <img src="/assets/star4.svg" width={20} />
              <img src="/assets/star4.svg" width={20} />
              <img src="/assets/star4.svg" width={20} />
              <img src="/assets/star4.svg" width={20} />
            </div>
            <h2 className="text-white font-semibold pb-4">Sara Smith</h2>
          </div>
          <div className="w-[350px] h-[350px] border border-white/50 rounded-2xl flex flex-col justify-between items-center hover:-translate-y-2 transition-all duration-300 p-5">
            <p className="text-center text-white/80 text-sm">
              "They were professional, prompt, and provided high-quality
              translations that accurately captured the nuances of the language.
              Their attention to detail and commitment to delivering a top-notch
              product was evident throughout the entire process. I will
              definitely be using Team Rohit&apos;s translation services again
              in the future."
            </p>
            <div className="flex">
              <img src="/assets/star4.svg" width={20} />
              <img src="/assets/star4.svg" width={20} />
              <img src="/assets/star4.svg" width={20} />
              <img src="/assets/star4.svg" width={20} />
              <img src="/assets/star4.svg" width={20} />
            </div>
            <h2 className="text-white font-semibold pb-4">Thomas</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent7;
