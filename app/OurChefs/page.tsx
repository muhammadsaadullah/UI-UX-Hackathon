import Header from "../components/Header"
import Footer from "../components/Footer";

export default function Chef() {
    const title = "Our Chef"
    const location  = "Chef"

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