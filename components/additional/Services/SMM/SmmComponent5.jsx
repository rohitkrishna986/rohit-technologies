import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SmmComponent5 = () => {
  return (
    <>
      <div className="bg-black text-white flex flex-col justify-center items-center mt-5 py-10 border-none overflow-hidden">
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
      <div className="bg-black flex flex-col gap-5 justify-center items-center overflow-hidden mb-8 my-4">
        <div className=" w-[60%] bg-black flex flex-col md:flex-row gap-5 justify-between items-center">
          <div className="w-[300px] md:w-[400px] h-[400px] border bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex flex-col items-center p-5">
            <span className="text-blue-600 bg-white p-4 rounded-full text-3xl">
              <FaFacebook />
            </span>
            <h2 className="text-black font-semibold py-4">Facebook</h2>
            <p className="text-center text-black text-sm">
              With over 2 billion active users, Facebook is one of the most
              widely used social media platforms. It provides businesses with
              various advertising options, including sponsored posts, video ads,
              and carousel ads. Facebook also offers targeting options based on
              demographics, interests, and behaviors, allowing businesses to
              reach their ideal audience.
            </p>
          </div>
          <div className="w-[300px] md:w-[400px] h-[400px] border bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex flex-col items-center p-5">
            <span className="text-blue-600 bg-white p-4 rounded-full text-3xl">
              <FaInstagram />
            </span>
            <h2 className="text-black font-semibold py-4">Instagram</h2>
            <p className="text-center text-black text-sm">
              Instagram has over 1 billion active users, making it a popular
              platform for businesses to showcase their products and services
              through visually appealing content. Instagram offers advertising
              options such as photo ads, video ads, and Instagram Stories ads.
              Businesses can also utilize influencers to promote their brand and
              products to a targeted audience.
            </p>
          </div>
          <div className="w-[300px] md:w-[400px] h-[400px] border bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex flex-col items-center p-5">
            <span className="text-blue-600 bg-white p-4 rounded-full text-3xl">
              <FaXTwitter />
            </span>
            <h2 className="text-black font-semibold py-4">Twitter</h2>
            <p className="text-center text-black text-sm">
              Twitter has over 330 million active users, making it a popular
              platform for businesses to share short, concise messages and
              engage with their audience through conversations and hashtags.
              Twitter offers advertising options such as promoted tweets,
              promoted accounts, and promoted trends.
            </p>
          </div>
        </div>
        <div className="w-[60%] bg-black flex flex-col md:flex-row gap-5 justify-between items-center">
          <div className="w-[300px] md:w-[400px] h-[400px] border bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex flex-col items-center p-5">
            <span className="text-blue-600 bg-white p-4 rounded-full text-3xl">
              <FaLinkedin />
            </span>
            <h2 className="text-black font-semibold py-4">LinkedIn</h2>
            <p className="text-center text-black text-sm">
              LinkedIn is a professional social media platform with over 740
              million active users. It is an ideal platform for B2B marketing
              and networking, as it allows businesses to connect with
              professionals in their industry and share content that
              demonstrates their expertise. LinkedIn offers advertising options
              such as sponsored content, sponsored In Mail, and display ads.
            </p>
          </div>
          <div className="w-[300px] md:w-[400px] h-[400px] border bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex flex-col items-center p-5">
            <span className="text-blue-600 bg-white p-4 rounded-full text-3xl">
              <FaYoutube />
            </span>
            <h2 className="text-black font-semibold py-4">YouTube</h2>
            <p className="text-center text-black text-sm">
              YouTube is the world&apos;s largest video-sharing platform, with
              over 2 billion active users. It is an ideal platform for
              businesses to showcase their products and services through video
              content. Businesses can also use YouTube for advertising by
              creating video ads that appear before or during other YouTube
              videos.
            </p>
          </div>
          <div className="w-[300px] md:w-[400px] h-[400px] border bg-gradient-to-br from-slate-100 via-slate-300 to-red-300 flex flex-col items-center p-5">
            <span className="text-blue-600 bg-white p-4 rounded-full text-3xl">
              <FaWhatsapp />
            </span>
            <h2 className="text-black font-semibold py-4">WhatsApp</h2>
            <p className="text-center text-black text-sm">
              WhatsApp is a powerful tool for social media marketing, offering
              direct and personal communication with customers. You can use it
              for sharing updates, promotions, and engaging directly through
              messages or status updates. It&apos;s perfect for building strong
              customer relationships and driving more personalized interactions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmmComponent5;
