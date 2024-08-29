import SeoComponent1 from "@/components/additional/Services/SEO/SeoComponent1";
import SeoComponent2 from "@/components/additional/Services/SEO/SeoComponent2";
import SeoComponent3 from "@/components/additional/Services/SEO/SeoComponent3";
import SeoComponent4 from "@/components/additional/Services/SEO/SeoComponent4";
import SeoComponent5 from "@/components/additional/Services/SEO/SeoComponent5";

const page = () => {
  return (
    <div className=" p-2 md:p-2 bg-black">
      <SeoComponent1 />
      <SeoComponent2 />
      <SeoComponent3 />
      <SeoComponent4 />
      <SeoComponent5 />
    </div>
  );
};

export default page;
