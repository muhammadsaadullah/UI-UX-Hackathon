import Header from "../components/Header"
import Footer from "../components/Footer";

export default function SIgnIn() {
    const title = "Sign-In Page"
    const location  = "Sign in"

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