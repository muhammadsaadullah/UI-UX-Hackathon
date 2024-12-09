import Header from "../components/Header"
import Footer from "../components/Footer";

export default function SIgnUp() {
    const title = "Sign-Up Page"
    const location  = "Sign up"

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