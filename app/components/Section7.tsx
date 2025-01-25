import Cards from "./Cards";
export default function Section7() {
    let CardData = [
        {
            image: "/chef1.jpeg",
            head: "D.Estwood",
            subhead: "Chief Chef",
        },    
        {
            image: "/chef2.jpeg",
            head: "D.Scoriesh",
            subhead: "Assistant Chef",
        },    
        {
            image: "/chef3.jpeg",
            head: "M. William",
            subhead: "Advertising Chef",
        },    
        {
            image: "/chef4.jpeg",
            head: "W.Readfroad",
            subhead: "Chef",
        },    
    ]
    
  return (
    <div>
        <div className="flex flex-col px-[200px] w-screen">
            <h1 className="font-greatvibes font-normal text-center text-[32px] text-primary-orange3">
                Chefs
            </h1>
            <h1 className="font-roboto font-bold text-5xl mb-10 text-center text-white">
                <span className="text-primary-orange3">Me</span>et Our Chef
            </h1>
            <div className="flex w-full">
                <div className="flex flex-row justify-between gap-5 w-full">
                    {
                        CardData.map((data, index) => {
                            return(
                                <div className="w-1/4">
                                    <Cards 
                                        key={index}
                                        image={data.image}
                                        head={data.head}
                                        subhead={data.subhead}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex w-full justify-center items-center mt-10 my-5 mb-3">
                <button className="h-[50px] w-[155px] bg-transparent border-[1px] border-primary-orange3 rounded-full text-white font-inter font-normal text-base">See More</button>
            </div>
        </div>
    </div>
  )
}  