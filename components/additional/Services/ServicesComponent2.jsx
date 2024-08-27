import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServicesComponent2 = () => {
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
              <p className="text-justify">
                You don&apos;t need to look any further than Rohit to find the
                best digital marketing service in India. Rohit is one of the top
                digital marketing firms that focuses on delivering businesses in
                India comprehensive solutions tailored to their specific needs.
                Rohit is committed to helping clients achieve their marketing
                goals and maximize their online presence. With a team of
                experienced professionals and a proven track record,
                they&apos;re well-equipped to assist you.
              </p>

              <p className="pt-2 text-justify">
                Rohit&apos;s deep understanding of the local market and consumer
                behavior is one of the best reasons to choose them for digital
                marketing services in India. Their expertise enables them to
                create ads that effectively reach a diverse audience and deliver
                tangible results. Whether you&apos;re looking to enhance brand
                visibility, generate more leads, or boost sales, Rohit has the
                knowledge and tools to help you succeed.
              </p>

              <p className="pt-2 text-justify">
                Rohit offers a wide range of digital marketing services,
                including search engine optimization (SEO), pay-per-click (PPC)
                advertising, social media marketing, email marketing, and more.
                This comprehensive approach ensures that each client receives a
                customized plan that addresses their unique needs and delivers
                measurable outcomes.
              </p>

              <p className="pt-2 text-justify">
                Overall, Rohit stands out as the leading digital marketing
                service in India. They are a reliable partner capable of helping
                you achieve your business objectives efficiently. With their
                expertise, creativity, and dedication to client success, Rohit
                is the ideal choice for businesses aiming to thrive in
                India&apos;s competitive market.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="py-2">
            <AccordionTrigger>
              What are the two main categories of digital marketing?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-justify">
                Because Rohit is a digital marketing service in India, they
                offer solutions for both inbound marketing and outbound
                marketing, which are the two major types of digital marketing.
              </p>

              <p className="pt-2 text-justify">
                Inbound marketing is all about getting potential customers to
                buy from you by creating and sharing information in different
                ways, like through blogs, social media, search engine
                optimisation (SEO), and email newsletters. Rohit knows a lot
                about inbound marketing, which lets them make interesting
                content that speaks to their Indian target group and brings free
                traffic to their clients websites and social media pages.
              </p>

              <p className="pt-2 text-justify">
                Outbound marketing, on the other hand, uses more direct methods
                to get in touch with possible customers, like ads, cold emails,
                and phone calls. Rohit uses creative outbound marketing
                techniques to find and talk to potential customers in India.
                They do this by using focused ads and personalised messages to
                get leads and turn them into customers.
              </p>

              <p className="pt-2 text-justify">
                Rohit helps businesses improve their online visibility, meet
                more people, and reach their marketing goals in the competitive
                digital world by providing a wide range of digital marketing
                services in India that include both internal and outbound
                marketing strategies.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="py-2">
            <AccordionTrigger>
              What are the 4 major types of digital marketing?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-justify">
                In India, Rohit is one of the best digital marketing service
                providers. They help businesses improve their online profile and
                reach their target audience in a number of different ways. These
                are the four main types of digital marketing services that Rohit
                in India provides:
              </p>
              <p className="pt-2 text-justify">
                1. Search Engine Optimisation (SEO): Rohit&apos;s main job is to
                make websites more visible and higher up on search engine
                results pages (SERPs). Additionally, by using relevant terms,
                producing high-quality content, and carrying out technical
                optimisations, they help businesses get more free traffic and
                become more visible online.
              </p>
              <p className="pt-2 text-justify">
                2. Social Media Marketing (SMM): Rohit helps companies in India
                use Facebook, Instagram, Twitter, and LinkedIn, among others, to
                connect with their audience, raise awareness of their brand, and
                get people to interact with them. To get the best results, they
                make custom plans, write interesting material, and run social
                media advertising campaigns.
              </p>
              <p className="pt-2 text-justify">
                3. Pay-Per-Click (PPC) Advertising: Rohit helps companies in
                India find potential customers through Google Ads and Bing Ads
                through PPC advertising. They create and optimise ad strategies,
                conduct keyword research, and monitor performance to get the
                best return on investment (ROI) and increase sales.
              </p>
              <p className="pt-2 text-justify">
                4. Content Marketing: Rohit knows how important good content is
                for digital marketing plans. They help businesses in India
                create content that their target audience will find useful,
                interesting, and worth sharing. They produce content that builds
                authority in the field and attracts and retains customers,
                whether it&apos;s blog posts, whitepapers, videos, or images.
              </p>
              <p className="pt-2 text-justify">
                They excel in these four main types of digital marketing, which
                helps companies in India reach their marketing goals and stay
                ahead of the competition in the digital world.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="py-2">
            <AccordionTrigger>
              Which is the biggest digital marketing company in India?
            </AccordionTrigger>
            <AccordionContent>
              Rohit Technology is widely regarded as a top digital marketing
              company in India, delivering outstanding results and innovative
              solutions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ServicesComponent2;
