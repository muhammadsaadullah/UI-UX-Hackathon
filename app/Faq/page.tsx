import Header from "../components/Header"
import Footer from "../components/Footer";

export default function Faq() {
    const title = "FAQ Page"
    const location  = "faq"

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