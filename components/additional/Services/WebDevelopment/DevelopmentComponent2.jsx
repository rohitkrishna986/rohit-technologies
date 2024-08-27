const DevelopmentComponent2 = () => {
  return (
    <div className="lg:h-[38rem] pt-4 text-white bg-black flex justify-center border-none">
      <div className="flex flex-col lg:flex-row h-full lg:h-[80vh] w-full lg:w-[80vw] items-center py-8">
        <div className="w-full lg:w-[60%] md:pl-10 px-4 lg:px-0">
          <h2 className="text-xl lg:text-4xl font-medium text-center md:text-start my-8">
            We Create Digital Experiences <br />
            that Engage, Inspire and Drive Results.
          </h2>
          <div className="flex flex-col gap-4">
          <p className="font-light text-white/80 text-justify lg:leading-8">
            At Rohit, we believe that a successful digital presence requires
            more than just website - it requires a complete and immersive
            experience that engages, inspires, and drives results. Our team of
            talented developers, designers, and digital strategists work
            together to create dynamic web experiences that capture the
            attention of your audience and leave a lasting impression.
          </p>
          <p className="font-light text-white/80 text-justify lg:leading-8">
            We take a holistic approach to digital experience creation, focusing
            on every aspect of the user journey, from the first click to the
            final conversion. By leveraging the latest web development
            technologies, design trends, and digital marketing strategies, we
            help our clients achieve their goals and stand out in a crowded
            online marketplace.
          </p>
          <p className="font-light text-white/80 text-justify lg:leading-8">
            Whether you're looking to build a new website from scratch, revamp
            an existing site, or create a mobile app that engages your audience
            on the go, we have the expertise and creativity to deliver the
            results you need. Contact us today to learn more about how we can
            help transform your digital presence and create experiences that
            engage, inspire, and drive results.
          </p>
          </div>
        </div>
        <div className="flex-1 flex justify-end py-20 md:py-0">
          <img
            className="rounded-lg bg-white p-5"
            src="/assets/services/WebDevelopment/Web-Development-1.gif"
            alt="Build Your Own Digital Brand Image"
            height={450}
            width={450}
          />
        </div>
      </div>
    </div>
  );
};

export default DevelopmentComponent2;
