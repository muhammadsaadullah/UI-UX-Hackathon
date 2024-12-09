import Header from "../components/Header"
import Footer from "../components/Footer";

export default function BlogDetails() {
    const title = "Blog Details"
    const location  = "Blog details"

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