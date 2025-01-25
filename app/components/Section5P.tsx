import Section5C from "./Section5C"
export default function Section5P() {
    let Cards = [
        {
            image: "/icon1.png",
            heading1: "Professional Chefs",
            heading2: "420"
        },
        {
            image: "/icon2.png",
            heading1: "Items Of Food",
            heading2: "320"
        },
        {
            image: "/icon3.png",
            heading1: "Years Of Experienced",
            heading2: "30+"
        },
        {
            image: "/icon4.png",
            heading1: "Happy Customers",
            heading2: "220"
        },
    ]
  return (
    <div
        className="w-screen relative z-0 bg-cover bg-center overflow-x-hidden overflow-hidden"
        style={{ backgroundImage: "url('/sec5bg.jpeg')" }}
    >   
        {/* Black Overlay */}
        <div className="absolute inset-0 z-10 bg-black bg-opacity-80"></div>

        <div className="flex flex-row justify-between items-center relative m-20 z-20 mx-[200px]">
            {       
                Cards.map((card, index) => {
                    return (
                        <Section5C 
                            key={index} 
                            image={card.image} 
                            heading1={card.heading1} 
                            heading2={card.heading2} 
                        />
                    )
                }) 
            }
        </div>      
    </div>
  )
}