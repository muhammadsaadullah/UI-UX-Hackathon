import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Header from "./components/Header";

export default function Home() {
  const title = "Home"
  const location  = ""

  return (
      <div>
          <Header 
              title = {title}
              loc = {location}
          />
          <Testimonials />
          <Footer />
      </div>       
  );
}