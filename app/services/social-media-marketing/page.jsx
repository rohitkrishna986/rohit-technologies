import SmmComponent1 from "@/components/additional/Services/SMM/SmmComponent1"
import SmmComponent2 from "@/components/additional/Services/SMM/SmmComponent2"
import SmmComponent3 from "@/components/additional/Services/SMM/SmmComponent3"
import SmmComponent4 from "@/components/additional/Services/SMM/SmmComponent4"
import SmmComponent5 from "@/components/additional/Services/SMM/SmmComponent5"
import SmmComponent6 from "@/components/additional/Services/SMM/SmmComponent6"
import SmmComponent7 from "@/components/additional/Services/SMM/SmmComponent7"

const page = () => {
  return (
    <div className="p-2 md:p-2 bg-black">
        <SmmComponent1/>
        <SmmComponent2/>
        <SmmComponent3/>
        <SmmComponent4/>
        <SmmComponent5/>
        <SmmComponent6/>
        <SmmComponent7/>
    </div>
  )
}

export default page