import Banner from "../components/home/banner/Banner";
import Navbar from "../components/shared/navbar/Navbar";
import Showcase from "../components/home/showcase/Showcase";
import OurProducts from "../components/home/ourProducts/OurProducts";
import CaseSlider from "../components/home/caseSlider/CaseSlider";
import Ideas from "../components/home/ideas/Ideas";
import SpecialCase from "../components/home/specialCase/SpecialCase";
import Features from "../components/home/Features/Features";
import CustomMade from "../components/home/customMade/CustomMade";
import Footer from "../components/shared/footer/Footer";
export default function Home() {
  return (
    <div>      
      <Navbar />  
      <Banner />
      <Showcase /> 
      <OurProducts />
      <CaseSlider />
      <Ideas />  
      <SpecialCase />
      <Features />
      <CustomMade />
      <Footer /> 
    </div>
  )
}
