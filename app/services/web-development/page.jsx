import DevelopmentComponent1 from "@/components/additional/Services/WebDevelopment/DevelopmentComponent1"
import DevelopmentComponent2 from "@/components/additional/Services/WebDevelopment/DevelopmentComponent2"
import DevelopmentComponent3 from "@/components/additional/Services/WebDevelopment/DevelopmentComponent3"
import DevelopmentComponent4 from "@/components/additional/Services/WebDevelopment/DevelopmentComponent4"


const page = () => {
  return (
    <div className="overflow-hidden">
        <DevelopmentComponent1/>
        <DevelopmentComponent2/>
        <DevelopmentComponent3/>
        <DevelopmentComponent4/>
    </div>
  )
}

export default page