
import GetQuoteButton from "../GetQuoteButton";

const HomeComponent5 = () => {
  return (
    <div className="text-white bg-black flex justify-center pt-20 pb-10 border-none">
      <div className="flex flex-col lg:flex-row h-full lg:h-[80vh] w-full items-center lg:w-[85vw] py-8">
        <div className="w-full lg:w-[50%] px-4 lg:px-0">
          <h2 className="text-lg text-center md:text-start lg:text-3xl font-bold my-8">
            Create a Search-Friendly Brand with Expert Content Deployment
          </h2>
          <p className="font-light text-white/80 text-justify lg:leading-8">
            Optimizing your website&apos;s search engine ranking can increase online
            visibility and attract more customers. Invest in SEO to stay ahead
            of competitors and adapt to algorithm changes.
          </p>
          <div className="my-8 justify-center lg:justify-start flex gap-8">
            <GetQuoteButton name="Audit Now" />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <video
            className="w-[80%] md:w-full max-w-sm h-auto rounded-lg bg-gray-900"
            muted
            loop
            playsInline
            autoPlay
          >
            <source src="/assets/google-search.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent5;
