import Header from "../components/Header"
import Footer from "../components/Footer";

export default function Menu() {
    const title = "Our Menu"
    const location  = "Menu"

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