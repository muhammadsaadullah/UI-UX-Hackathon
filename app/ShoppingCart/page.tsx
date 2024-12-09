import Header from "../components/Header"
import Footer from "../components/Footer";

export default function ShoppingCart() {
    const title = "Shopping Cart"
    const location  = "Shopping cart"

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