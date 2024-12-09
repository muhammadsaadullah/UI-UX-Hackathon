import Header from "../components/Header"
import Footer from "../components/Footer";

export default function Shop() {
    const title = "Our Shop"
    const location  = "Shop"

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