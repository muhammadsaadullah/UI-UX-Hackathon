import Header from "../components/Header"
import Footer from "../components/Footer";

export default function Blog() {
    const title = "Blog List"
    const location  = "Blog"

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