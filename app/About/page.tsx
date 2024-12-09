import Header from "../components/Header"
import Footer from "../components/Footer";

export default function About() {
    const title = "About Us"
    const location  = "About"

    return (
        <div>
            <Header 
                title = {title}
                loc = {location}
            />
            <Footer />
        </div>       
    );
}