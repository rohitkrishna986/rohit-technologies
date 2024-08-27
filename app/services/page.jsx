import ServicesComponent1 from "@/components/additional/Services/ServicesComponent1"
import ServicesComponent2 from "@/components/additional/Services/ServicesComponent2"


const page = () => {
  return (
    <div className="bg-black p-2 md:p-0">
      <ServicesComponent1/>
      <ServicesComponent2/>
    </div>
  )
}

export default page