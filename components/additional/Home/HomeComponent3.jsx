import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const HomeComponent3 = () => {
  return (
    <>
      <div className="bg-black text-white flex flex-col justify-center items-center pb-10 border-none overflow-hidden">
        <h2 className="font-semibold">Our Strength</h2>
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
            Creating Digital Success Stories with <br /> Advanced Media and
            Technology
          </h2>
        </div>
        <div className="my-20 bg-black">
          <div className="h-[10rem] flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="normal"
            />
          </div>
          <div className="h-[10rem] flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials2}
              direction="left"
              speed="normal"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const testimonials = [
  {
    image: "/assets/SocialMediaIcons/Digital-marketing-company-1.png",
  },
  {
    image: "/assets/SocialMediaIcons/Digital-marketing-company-2.png",
  },
  {
    image: "/assets/SocialMediaIcons/Digital-marketing-company-3.png",
  },
  {
    image: "/assets/SocialMediaIcons/Digital-marketing-company-4.png",
  },
  {
    image: "/assets/SocialMediaIcons/Digital-marketing-company-5.png",
  },
  {
    image: "/assets/SocialMediaIcons/Digital-marketing-company-6.png",
  },
  {
    image: "/assets/SocialMediaIcons/Digital-marketing-company-7.png",
  },
];
const testimonials2 = [
  {
    image: "/assets/LanguageIcons/Digital-marketing-company-1.jpg",
  },
  {
    image: "/assets/LanguageIcons/Digital-marketing-company-2.jpg",
  },
  {
    image: "/assets/LanguageIcons/Digital-marketing-company-3.jpg",
  },
  {
    image: "/assets/LanguageIcons/Digital-marketing-company-4.jpg",
  },
];

export default HomeComponent3;
