import Image from "next/image"
import Link from "next/link"
import Component73 from "./component73"
export default function Footer(){
    // const details = [
    //     {
    //         text1: "Is fastfood good for",
    //         text2: "your body?",
    //         date: "February 28,2022"
    //     },
    //     {
    //         text1: "Change your food habit",
    //         text2: "With organic food",
    //         date: "February 28,2022"
    //     },
    //     {
    //         text1: "Do you like fastfood for",
    //         text2: "your life?",
    //         date: "February 28,2022"
    //     }
        
    // ]

    const details = [
        {
            text: "Is fastfood good for your body?",
            date: "February 28,2022"
        },
        {
            text: "Change your food habit With organic food",
            date: "February 28,2022"
        },
        {
            text: "Do you like fastfood for your life?",
            date: "February 28,2022"
        }
        
    ]
    
    return(
        <div className="flex flex-col justify-center items-center h-full w-screen bg-black gap-14 pt-32  ">
            <div className="flex  gap-5 border-b-2 w-7/12 justify-self-center items-center border-primary-orange3">
                <div className="flex flex-col w-[59%] justify-self-start gap-3 pb-5 ">
                    <h1 className="font-roboto font-bold text-[32px] text-white leading-10"><span className="text-primary-orange3">St</span>ill You Need Our Support ?</h1>
                    <h1 className="font-roboto font-normal text-base text-white leading-6">Don\’t wait make a smart & logical quote here. Its pretty easy.</h1>
                </div>  
                <div className="flex flex-row w-[38 %] h-12 rounded-[4px] bg-primary-orange3 justify- place-self-start">
                    <form className="flex flex-row rounded-[4px] w-[60%] bg-primary-orange3 content-center ">
                        <input type="email" className="font-inter font-normal text-base pl-5 bg-transparent text-white placeholder-white opacity-[0.59] outline-none" placeholder="Enter Your Email"/>
                    </form>  
                    <button className="font-inter font-normal text-base justify-center items-center text-primary-orange3 w-[44%] p-3 rounded-[4px] bg-white">Subscribe Now</button> 
                </div>                           
            </div>


            <div className="flex flex-row gap-[70px] h-full w-8/12 justify-self-center items-start">
                <div className="flex flex-col gap-5">
                    <h1 className="font-roboto font-bold text-xl text-white">About Us.</h1>
                    <h2 className="font-roboto font-normal text-lg text-white">
                        orporate clients and leisure travelers hasbeen relying on Groundlink for 
                        dependablesafe, and professional chauffeured carservice in major cities across World.
                    </h2>
                    <div className="flex flex-row gap-3">
                        <div className="flex h-[71px] w-[77px] bg-primary-orange3 rounded-[3px] justify-center items-center">
                            <Image src="/ClockClockwise.png" alt="ClockClockwise icon" width={39} height={36} />
                        </div>
                        <div>
                            <h1 className="font-inter font-normal text-lg text-white">Opening Houres</h1>
                            <h1 className="font-inter font-normal text-sm text-white">Mon - Sat(8.00 - 6.00)</h1>
                            <h1 className="font-inter font-normal text-sm text-white">Sunday - Closed</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="font-roboto font-bold text-xl w-28 text-white">Useful Links</h1>
                    <ul className="flex flex-col gap-3">
                        <li className="font-roboto font-normal text-base text-white"><Link href="/AboutUs">About</Link></li>
                        <li className="font-roboto font-normal text-base text-white"><Link href="">News</Link></li>
                        <li className="font-roboto font-normal text-base text-white"><Link href="">Patners</Link></li>
                        <li className="font-roboto font-normal text-base text-white"><Link href="">Team</Link></li>
                        <li className="font-roboto font-normal text-base text-white"><Link href="/Menu">Menu</Link></li>
                        <li className="font-roboto font-normal text-base text-white"><Link href="">Contact</Link></li>
                    </ul>                    
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="font-roboto font-bold text-xl text-white">Help?</h1>
                    <ul className="flex flex-col gap-3">
                        <li className="font-roboto font-normal text-base text-white"><Link href="/FAQ-Page">FAQ</Link></li>
                        <li className="font-roboto font-normal text-base text-white"><Link href="">Term & Condition</Link></li>
                        <li className="font-roboto font-normal text-base text-white"><Link href="">Reporting</Link></li>
                        <li className="font-roboto font-normal text-base text-white"><Link href="">Documentation</Link></li>
                        <li className="font-roboto font-normal text-base text-white"><Link href="">Support Policy</Link></li>
                        <li className="font-roboto font-normal text-base text-white"><Link href="">Privacy</Link></li>
                    </ul>                    
                </div>
                <div className="flex flex-col gap-5 w-full">
                    <h1 className="font-roboto font-bold text-xl text-white">Recent Post</h1>
                    <div className="flex flex-col gap-3">
                        {
                            details.map((info) => {
                                return(
                                    <div className="flex">
                                        <Component73 
                                            text={info.text}
                                            date={info.date}
                                        />
                                        {/* <Component73 
                                            text1={info.text1}
                                            text2={info.text2}
                                            date={info.date}
                                        /> */}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="flex bg-[#4F4F4F] justify-center items-center w-screen p-6 ">
                <div className="flex flex-row justify-center items-center w-[69%]">
                    <div className="flex justify-start items-center w-9/12">
                        <h1 className="font-inter font-normal text-base text-white">Copyright © 2024 by Muhammad Saadullah. All Rights Reserved.</h1>
                    </div>
                    <div className="flex flex-row gap-3 justify-end  w-3/12">
                        <div className="w-9 h-8 bg-white rounded-sm text-center place-content-center"><i className="fab fa-facebook-f text-black text-base"></i></div>
                        <div className="w-9 h-8 bg-white rounded-sm text-center place-content-center"><i className="fab fa-twitter text-black text-base"></i></div>
                        <div className="w-9 h-8 bg-white rounded-sm text-center place-content-center"><i className="fab fa-instagram text-black text-base"></i></div>
                        <div className="w-9 h-8 bg-white rounded-sm text-center place-content-center"><i className="fab fa-youtube text-primary-orange3 text-base"></i></div>
                        <div className="w-9 h-8 bg-white rounded-sm text-center place-content-center"><i className="fab fa-pinterest text-black text-base"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

