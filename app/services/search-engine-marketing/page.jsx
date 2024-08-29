import SemComponent1 from "@/components/additional/Services/SEM/SemComponent1"
import SemComponent2 from "@/components/additional/Services/SEM/SemComponent2"
import SemComponent3 from "@/components/additional/Services/SEM/SemComponent3"
import SemComponent4 from "@/components/additional/Services/SEM/SemComponent4"
import SemComponent5 from "@/components/additional/Services/SEM/SemComponent5"
import SemComponent6 from "@/components/additional/Services/SEM/SemComponent6"


const page = () => {
  return (
    <div className="p-2 md:p-2 bg-black">
        <SemComponent1/>
        <SemComponent2/>
        <SemComponent3/>
        <SemComponent4/>
        <SemComponent5/>
        <SemComponent6/>
    </div>
  )
}

export default page