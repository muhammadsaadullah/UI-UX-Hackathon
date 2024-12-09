import Header from "../components/Header"
import Footer from "../components/Footer";

export default function CheckOut() {
    const title = "Checkout Page"
    const location  = "Checkout"

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