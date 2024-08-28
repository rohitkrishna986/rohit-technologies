import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DevelopmentComponent7 = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center pt-32 pb-10 border-none overflow-hidden">
      <h2 className="font-semibold text-xl md:text-2xl">FAQ</h2>
      <div className="w-[40rem] h-10 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div>
        <h2 className="text-xl md:text-4xl text-center font-semibold">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="w-[70%] my-20">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="py-2">
            <AccordionTrigger>
              What is web development, and why is it important for my online
              presence?
            </AccordionTrigger>
            <AccordionContent>
              Web development is the process of creating and maintaining
              websites. It&apos;s essential because your website is often the
              first point of contact with potential customers, and it plays a
              crucial role in representing your brand online.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="py-2">
            <AccordionTrigger>
              How can web development benefit my business in India?
            </AccordionTrigger>
            <AccordionContent>
              Web development can benefit your India-based business by providing
              a professional online presence, improving user experience,
              increasing accessibility, and enabling features like e-commerce,
              lead generation, and customer engagement.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="py-2">
            <AccordionTrigger>
              What web development services does Rohit Technologies offer?
            </AccordionTrigger>
            <AccordionContent>
              Rohit Technologies offers a wide range of web development
              services, including custom website design, front-end and back-end
              development, e-commerce solutions, content management systems
              (CMS), web applications, and website maintenance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="py-2">
            <AccordionTrigger>
              What is the cost of web development services at Rohit
              Technologies?
            </AccordionTrigger>
            <AccordionContent>
              The cost of web development varies based on the project&apos;s
              scope and requirements. We offer customized packages to fit your
              budget and objectives. Contact us for a personalized quote.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default DevelopmentComponent7;
