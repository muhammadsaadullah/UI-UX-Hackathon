import Header from "../components/Header"
import Footer from "../components/Footer";

export default function ShopDetails() {
    const title = "Shop Details"
    const location  = "Ship details"

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