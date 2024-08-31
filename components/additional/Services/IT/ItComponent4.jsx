import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ItComponent4 = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center pb-4 mt-20 border-none overflow-hidden">
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
              Why choose Rohit Tech for reliable IT solutions?
            </AccordionTrigger>
            <AccordionContent>
              Rohit Tech in Qatar prioritizes reliability and efficiency in our
              IT infrastructure solutions. Our experienced team tailors
              solutions to meet your unique business needs, ensuring seamless
              operations and optimal performance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="py-2">
            <AccordionTrigger>
              How do your Server and Storage Solutions meet business needs?
            </AccordionTrigger>
            <AccordionContent>
              Our IT infrastructure services in India, specifically Server and
              Storage Solutions, cover a range of needs, from file servers to
              web servers. We provide diverse storage options, including hard
              drives and network-attached storage, ensuring the security and
              accessibility of your data.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="py-2">
            <AccordionTrigger>
              What features make your IT Security Solutions effective?
            </AccordionTrigger>
            <AccordionContent>
              Rohit Tech understands the critical nature of cybersecurity. Our
              IT Security Solutions, a key component of our IT infrastructure
              services in India, encompass firewalls, antivirus software, and
              intrusion detection systems to protect your data and systems from
              potential cyber threats.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="py-2">
            <AccordionTrigger>
              How does Rohit Tech ensure uninterrupted operations with UPS
              Solutions?
            </AccordionTrigger>
            <AccordionContent>
              Rohit Tech offers Uninterruptible Power Supply (UPS) solutions as
              part of our IT infrastructure services in India to guarantee
              uninterrupted business operations during power outages. Our
              experts assist in designing and implementing tailored UPS
              solutions that align with your business needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ItComponent4;
