import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BrandingComponent7 = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center pb-4 mt-14 border-none overflow-hidden">
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
      <div className="w-[70%] my-14">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="py-2">
            <AccordionTrigger>
              What is branding, and why is it important for my business?
            </AccordionTrigger>
            <AccordionContent>
              Branding is the process of creating a unique identity for your
              business, encompassing your company&apos;s values, personality, and
              reputation. It&apos;s essential because it helps distinguish your brand
              in a competitive market, build trust with customers, and drive
              brand loyalty. Rohit Tech branding agency in India can help you improve
              your brand&apos;s personality. We combine creativity with strategic
              vision to make an effect that lasts.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="py-2">
            <AccordionTrigger>
              How can effective branding benefit my business?
            </AccordionTrigger>
            <AccordionContent>
              Effective branding can lead to increased brand recognition,
              customer loyalty, and a competitive edge. It also helps establish
              an emotional connection with your audience, making them more
              likely to choose your products or services. Talk to the best
              branding agency in India about creating a brand plan that will not
              only catch people&apos;s attention but also let the world know what
              makes your business special.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="py-2">
            <AccordionTrigger>
              What services does Rohit Tech offer to help with branding?
            </AccordionTrigger>
            <AccordionContent>
              At Rohit Tech, we offer a range of branding services, including brand
              strategy development, logo design, brand identity creation, brand
              messaging, and brand positioning. We work with you to build a
              strong and memorable brand. As the best branding agency in India,
              we create compelling stories that connect with your target
              audience and help you create a unique brand personality that
              lasts.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="py-2">
            <AccordionTrigger>
              Can you refresh or rebrand an existing business identity?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we can help refresh or rebrand an existing business identity.
              Whether you need a subtle update or a complete rebrand, our team
              can work with you to align your brand with your current goals and
              market trends.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default BrandingComponent7;
