import Image from "next/legacy/image";
import Menu from "./Menu";
export default function Section6() {
    let menuData1 = [
        {
            image: "/imgr1.jpeg",
            h1: "Lettuce Leaf",
            body: "Lacus nisi, et ac dapibus velit in consequat.",
            price: "12.5$"
        },
        {
            image: "/gal4.jpeg",
            h1: "Fresh Breakfast",
            body: "Lacus nisi, et ac dapibus velit in consequat.",
            price: "14.5$"
        },
        {
            image: "/imgr2.jpeg",
            h1: "Mild Butter",
            body: "Lacus nisi, et ac dapibus velit in consequat.",
            price: "12.5$"
        },       
        {
            image: "/imgT4.jpeg",
            h1: "Fresh Bread",
            body: "Lacus nisi, et ac dapibus velit in consequat.",
            price: "12.5$"
        },       
    ]
    let menuData2 = [
        {
            image: "/imge5.jpeg",
            h1: "Glow Cheese",
            body: "Lacus nisi, et ac dapibus velit in consequat.",
            price: "12.5$"
        },
        {
            image: "/imgr6.jpeg",
            h1: "Italian Pizza",
            body: "Lacus nisi, et ac dapibus velit in consequat.",
            price: "14.5$"
        },
        {
            image: "/img1.2.jpeg",
            h1: "Sllice Beef",
            body: "Lacus nisi, et ac dapibus velit in consequat.",
            price: "12.5$"
        },
        {
            image: "/img2.jpeg",
            h1: "Mushaom Pizza",
            body: "Lacus nisi, et ac dapibus velit in consequat.",
            price: "12.5$"
        },
    ]

    return (
        <div className="flex flex-col px-[200px] w-screen">
            <h1 className="font-greatvibes font-normal text-center text-[32px] text-primary-orange3   ">
                Choose & pick
            </h1>
            <h1 className="font-roboto font-bold text-5xl mb-10 text-center text-white   ">
                <span className="text-primary-orange3">Fr</span>om Our Menu
            </h1>
            <div className="flex justify-start mb-10 items-center">
                <ul className="flex flex-row gap-[75px]">
                    <li className="font-inter font-bold text-xl text-primary-orange3">Breakfast</li>
                    <li className="font-inter font-normal text-xl text-white">Lunch</li>
                    <li className="font-inter font-normal text-xl text-white">Dinner</li>
                    <li className="font-inter font-normal text-xl text-white">Dessert</li>
                    <li className="font-inter font-normal text-xl text-white">Drink</li>
                    <li className="font-inter font-normal text-xl text-white">Snack</li>
                    <li className="font-inter font-normal text-xl text-white">Suops</li>
                </ul>
            </div>
            <div className="flex flex-row gap-1 w-full mb-6">
                {/* Image */}
                <div className="flex relative w-[44%] justify-center items-center overflow-hidden" style={{height: "52vh"}}>
                    <div className="flex h-[70vh] overflow-hidden"><Image src="/rosemary.png" alt="" height={800} width={1000} objectFit="cover" objectPosition="center" /></div>
                    <div className="flex absolute w-4/5 justify-center place-self-start mr-10 items-start"><Image src="/plate.png" alt="" height={1000} width={1000} objectFit="cover" objectPosition="center"/></div>                    
                </div>

                {/* Menu */}
                <div className="flex w-60%] gap-5">
                    <div className="flex flex-col w-1/2 justify-between gap-7">
                        {
                            menuData1.map((menu, index) => {
                                return (
                                    <Menu 
                                        key={index}
                                        image={menu.image}
                                        h1={menu.h1}
                                        body={menu.body}
                                        price={menu.price}
                                    />                                    
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-col w-1/2 justify-between gap-7">
                        {           
                            menuData2.map((menu, index) => {
                                return (
                                    <Menu 
                                        key={index}
                                        image={menu.image}
                                        h1={menu.h1}
                                        body={menu.body}
                                        price={menu.price}
                                    />                                    
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}