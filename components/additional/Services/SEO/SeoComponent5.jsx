import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SeoComponent5 = () => {
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
              Can Search Engine Optimisation help my business grow?
            </AccordionTrigger>
            <AccordionContent>
              Yes, Rohit Tech Search Engine Optimisation in Qatar can help your
              business grow by increasing your online visibility, driving more
              traffic to your website, and improving your conversion rates. A
              strong Search Engine Optimisation strategy can also help you
              establish your business as a thought leader in your industry and
              build a strong online reputation
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="py-2">
            <AccordionTrigger>
              What are the different types of Search Engine Optimisation?
            </AccordionTrigger>
            <AccordionContent>
              There are three main types of Search Engine Optimisation in India:
              on-page optimization, off-page optimization, and technical Search
              Engine Optimisation. On-page optimization involves optimizing your
              website&apos;s content and structure to make it more appealing to
              search engines and improve user experience. Off-page optimization
              involves building high-quality backlinks to your website to
              improve your domain authority and search engine rankings.
              Technical Search Engine Optimisation involves optimizing your
              website&apos;s backend to improve its speed, security, and overall
              performance
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="py-2">
            <AccordionTrigger>
              How long does it take to see results from Search Engine
              Optimisation?
            </AccordionTrigger>
            <AccordionContent>
              Search Engine Optimisation in India is a long-term strategy, and
              it can take several months to see significant results. However,
              the time it takes to see results can vary depending on several
              factors, such as the competitiveness of your industry and the
              quality of your Search Engine Optimisation strategy
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="py-2">
            <AccordionTrigger>
              What is a sitemap and how does it impact Search Engine
              Optimisation?
            </AccordionTrigger>
            <AccordionContent>
              A sitemap is a file that lists all of the pages on your website
              and their relationship to one another. It is important for Search
              Engine Optimisation because it helps search engines understand the
              structure of your website and crawl it more efficiently. A
              well-organized and up-to-date sitemap can improve your website&apos;s
              visibility and indexing in search engine results pages.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default SeoComponent5;
