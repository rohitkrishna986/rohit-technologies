import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HomeComponent8 = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center pb-10 border-none overflow-hidden">
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
              Which service is best for digital marketing in India?
            </AccordionTrigger>
            <AccordionContent>
              India has many digital marketing agencies and platforms that offer
              a variety of services, including SEO, social media, and PPC. When
              choosing a service, you can consider factors like the platform&apos;s
              user base, features, and targeting options.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="py-2">
            <AccordionTrigger>
              How long does it take to see results from digital marketing efforts?
            </AccordionTrigger>
            <AccordionContent>
              The time it takes to see results can vary depending on several
              factors, including your industry, competition, and the specific
              strategies implemented. Generally, you can expect to see some
              improvements within a few months, with more significant gains over
              time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="py-2">
            <AccordionTrigger>
              How do you measure the success of a digital marketing campaign?
            </AccordionTrigger>
            <AccordionContent>
              Success is measured through various key performance indicators (KPIs)
              such as website traffic, conversion rates, ROI, and more. We provide
              regular reports to keep you informed of your campaign’s progress.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="py-2">
            <AccordionTrigger>
              Which is the biggest digital marketing company in India?
            </AccordionTrigger>
            <AccordionContent>
              Rohit Technology is widely regarded as a top digital marketing company in India, delivering outstanding results and innovative solutions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default HomeComponent8;
