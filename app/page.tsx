import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

export default function Home() {
  return (
    <div className="flex flex-col bg-black gap-24 overflow-x-hidden">
      <div>
        <HeroSection />
      </div>
      <div className="mt-9">
        <Section2 />
      </div>
      <div>
        <Section3 />
      </div>
      <div>
        <Section4 />
      </div> 
      <div>
        <Section5 />
      </div>
    </div>
  );
}