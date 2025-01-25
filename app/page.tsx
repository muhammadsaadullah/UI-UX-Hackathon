import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import HeroSection from "./components/HeroSection";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
//import Section5 from "./components/Section5"; (aint using as I didnt used Components in this)
import Section5P from "./components/Section5P";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <div className="flex flex-col bg-black gap-24 overflow-hidden overflow-x-hidden">
      <div><HeroSection /></div>
      <div className="mt-9"><Section2 /></div>
      <div><Section3 /></div>
      <div><Section4 /></div> 
      <div><Section5P /></div>
      <div><Section6 /></div>
      <div><Section7 /></div>
      <div><Testimonials /></div>
      <div><Section8 /></div>
      <div><Blog /></div>
      <div><Footer /></div>
    </div>
  );
}