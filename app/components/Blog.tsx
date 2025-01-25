import BlogCard from "./BlogCard";
export default function Blog(){
    let BlogData = [
        {
            image:  "/img2.jpeg",
            datePublished: "10 February 2022 ",
            title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
        },
        {
            image:  "/blog2.jpeg",
            datePublished: "10 February 2022 ",
            title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
        },
        {
            image:  "/blog3.jpeg",
            datePublished: "10 February 2022 ",
            title: "Curabitur rutrum velit ac congue malesuada",
        },
       
    ]
    return( 
        <div className="flex flex-col px-[200px] w-screen justify-center items-center mt-2">
            <h1 className="font-greatvibes font-normal text-center text-[32px] text-primary-orange3">
                Blog Post
            </h1>
            <h1 className="font-roboto font-bold text-5xl mb-10 text-center text-white">
                <span className="text-primary-orange3">La</span>test News & Blog
            </h1>
            <div className="flex flex-row gap-5 mt-5">
                {
                    BlogData.map((details, index) => {
                        return ( 
                            <BlogCard
                                key={index}
                                image={details.image}
                                date={details.datePublished}
                                title={details.title}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}