import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SemComponent6 = () => {
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
              What is Search Engine Marketing (SEM), and how does it differ from
              SEO?
            </AccordionTrigger>
            <AccordionContent>
              Search Engine Marketing in India is a digital marketing strategy
              that involves paid advertising on search engines like Google. It
              differs from SEO (Search Engine Optimization) in that it focuses
              on paid ads, while SEO emphasizes optimizing your website to rank
              organically in search results. The leading SEM company in India
              for strategic digital success. Our results-driven method will help
              you get more targeted traffic and increase your online exposure.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="py-2">
            <AccordionTrigger>
              How can Search Engine Marketing in India benefit my business in
              India?
            </AccordionTrigger>
            <AccordionContent>
              Search Engine Marketing in India can benefit your India-based
              business by placing your ads in front of a highly targeted
              audience actively searching for products or services like yours.
              It offers quick visibility, measurable results, and the ability to
              control your budget. The unbeatable success of SEM ads that are
              perfectly crafted. As the most reliable SEM company in India, we
              take your online presence to new heights and make sure your brand
              stands out in the online world.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="py-2">
            <AccordionTrigger>
              What Search Engine Marketing in India services does Rohit Tech
              offer?
            </AccordionTrigger>
            <AccordionContent>
              Rohit Tech offers a comprehensive range of Search Engine Marketing
              in India services, including pay-per-click (PPC) advertising,
              Google Ads management, keyword research, ad copywriting, ad
              campaign optimization, and landing page design. Our all-around
              digital services can help you become more visible online.
              We&apos;re not just an SEO company in India; we&apos;re also your
              go-to SEM experts who can bring you focused traffic and make your
              online impact bigger.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="py-2">
            <AccordionTrigger>
              What is the cost of Search Engine Marketing in India services at
              Rohit Tech?
            </AccordionTrigger>
            <AccordionContent>
              The cost of Search Engine Marketing in India services depends on
              several factors, including your advertising budget, campaign
              goals, and competition. We offer customized Search Engine
              Marketing in India packages to suit your specific needs. Contact
              us for a personalized quote. Contact us to learn more information.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default SemComponent6;
