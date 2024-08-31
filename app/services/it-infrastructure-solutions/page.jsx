import ItComponent1 from "@/components/additional/Services/IT/ItComponent1";
import ItComponent2 from "@/components/additional/Services/IT/ItComponent2";
import ItComponent3 from "@/components/additional/Services/IT/ItComponent3";
import ItComponent4 from "@/components/additional/Services/IT/ItComponent4";

const page = () => {
  return (
    <div className="p-2 md:p-2 bg-black">
      <ItComponent1 />
      <ItComponent2 />
      <ItComponent3 />
      <ItComponent4 />
    </div>
  );
};

export default page;
