import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SmmComponent7 = () => {
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
              What is Social Media Marketing (SMM), and why is it important for
              my business?
            </AccordionTrigger>
            <AccordionContent>
              Social Media Marketing (SMM) is a digital marketing strategy that
              involves using social media platforms to promote your brand,
              engage with your audience, and drive website traffic. It&apos;s
              important because it allows you to connect with your target
              audience where they spend their time online. Contact our Social
              Media Marketing India to start on the way to social media success.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="py-2">
            <AccordionTrigger>
              How can SMM benefit my business in India?
            </AccordionTrigger>
            <AccordionContent>
              SMM can benefit your India-based business by increasing brand
              visibility, building a loyal online community, driving website
              traffic, and generating leads and sales. It&apos;s an effective
              way to reach your local and global audience. As the leading Social
              Media Marketing India, we create plans that make your brand&apos;s
              online profile even stronger.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="py-2">
            <AccordionTrigger>
              What SMM services does Rohit Tech offer?
            </AccordionTrigger>
            <AccordionContent>
              Rohit Tech offers a comprehensive range of SMM services, including
              social media strategy development, content creation, social media
              advertising, social media management, influencer marketing, and
              analytics.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="py-2">
            <AccordionTrigger>
              Which social media platforms are best for my business in India?
            </AccordionTrigger>
            <AccordionContent>
              We analyze your business goals and target audience to determine
              the most suitable social media platforms. Common choices include
              Facebook, Instagram, Twitter, LinkedIn, and Whatsapp, depending on
              your industry and target demographic. Our team at the Social Media
              Marketing Qatar is dedicated to creating programs that have an
              effect and get results, from planning the strategy to putting it
              into action.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default SmmComponent7;
