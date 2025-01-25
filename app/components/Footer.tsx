'use client'
import Image from "next/legacy/image"
import Link from "next/link"
import Component73 from "./component73"
import Component73H from "./component73H"
import { usePathname } from "next/navigation"
export default function Footer(){
    const pathname = usePathname()
    const isHomePage = pathname === "/";

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

    const detailsH = [
        {
            image: "/unsplashCLMpC9UhyTo.jpeg",
            text: "Keep Your Business ",
            date: "20 Feb 2022"
        },
        {
            image: "/rcntH.jpeg",
            text: "Keep Your Business ",
            date: "20 Feb 2022"
        },
        {
            image: "/rcntH2.jpeg",
            text: "Keep Your Business ",
            date: "20 Feb 2022"
        },        
    ]
    
    return(
        <div className={`flex flex-col ${ isHomePage? "relative z-0 pt-0" : "pt-[110px]" } px-[200px] justify-center items-center h-full w-screen bg-black gap-10  `}>
            <div className={`flex gap-5 ${ isHomePage? "pb-9 mb-4 border-b" : "pb-0 mb-0 border-b-2" } w-[89%]  justify-between justify-self-center items-center border-primary-orange3`}>
                <div className="flex flex-col w-[59%] justify-self-start gap-3 pb-5">
                    <h1 className="font-roboto font-bold text-[32px] text-white leading-10"><span className="text-primary-orange3">St</span>ill You Need Our Support ?</h1>
                    <h1 className="font-roboto font-normal text-base text-white leading-6">Don\’t wait make a smart & logical quote here. Its pretty easy.</h1>
                </div>  
                <div className="flex flex-row w-[39%] h-12 rounded-[4px] bg-primary-orange3 justify-center place-self-start ">
                    <form className="flex flex-row rounded-[4px] w-[60%] bg-primary-orange3 content-center ">
                        <input type="email" className="font-inter font-normal text-base pl-5 bg-transparent text-white placeholder-white opacity-[0.59] outline-none" placeholder="Enter Your Email"/>
                    </form>  
                    <button className="font-inter font-normal text-base justify-center items-center text-primary-orange3 w-[42%] p-3 rounded-[4px] bg-white">Subscribe Now</button> 
                </div>                           
            </div>


            <div className="flex flex-row gap-[70px] h-full justify-self-center justify-between items-start">
                <div className={`flex flex-col gap-5 ${ isHomePage? "w-[39%]" : "w-5/12"} pr-9`}>
                    <h1 className="font-roboto font-bold text-xl text-white">About Us.</h1>
                    {isHomePage && 
                        <h2 className={`font-roboto font-normal text-white leading-6 pb-3 text-[15px]`}>
                            orporate clients and leisure travelers has been relying on Groundlink for 
                            dependab safe, and professional chauffeured car service in major cities across World.
                        </h2> 
                    }
                    {!isHomePage && 
                        <h2 className="font-roboto font-normal text-base text-white">
                            orporate clients and leisure travelers hasbeen relying on Groundlink for 
                            dependablesafe, and professional chauffeured carservice in major cities across World.
                        </h2> 
                    }
                    <div className="flex flex-row gap-3">
                        <div className="flex h-[71px] w-[77px] bg-primary-orange3 rounded-[3px] justify-center items-center">
                            <Image src="/ClockClockwise.png" alt="ClockClockwise icon" width={39} height={36} />
                        </div>
                        <div className="flex flex-col gap-[5px] justify-self-center place-self-center">
                            <h1 className="font-inter font-normal text-base text-white">Opening Houres</h1>
                            <h1 className="font-inter font-normal text-xs text-white">Mon - Sat(8.00 - 6.00)</h1>
                            <h1 className="font-inter font-normal text-xs text-white">Sunday - Closed</h1>
                        </div>
                    </div>
                </div>
                <div className={`flex flex-col gap-5 ${ isHomePage? "w-[28%]" : "w-1/6"}`}>
                    <h1 className="font-roboto font-bold text-xl text-white">Useful Links</h1>
                    <ul className={`flex flex-col ${ isHomePage? "gap-6" : "gap-3"}`}>
                        <li className={`${ isHomePage? "font-inter text-lg" : "font-roboto text-base" } font-normal text-white`}><Link href="/AboutUs">About</Link></li>
                        <li className={`${ isHomePage? "font-inter text-lg" : "font-roboto text-base" } font-normal text-white`}><Link href="">News</Link></li>
                        <li className={`${ isHomePage? "font-inter text-lg" : "font-roboto text-base" } font-normal text-white`}><Link href="">Patners</Link></li>
                        <li className={`${ isHomePage? "font-inter text-lg" : "font-roboto text-base" } font-normal text-white`}><Link href="">Team</Link></li>
                        <li className={`${ isHomePage? "font-inter text-lg" : "font-roboto text-base" } font-normal text-white`}><Link href="/Menu">Menu</Link></li>
                        <li className={`${ isHomePage? "font-inter text-lg" : "font-roboto text-base" } font-normal text-white`}><Link href="">Contact</Link></li>
                    </ul>                    
                </div>
                <div className={`flex flex-col gap-5 ${ isHomePage? "w-[28%]" : "w-1/6"}`}>
                    <h1 className="font-roboto font-bold text-xl text-white">Help?</h1>
                    <ul className={`flex flex-col ${ isHomePage? "gap-6" : "gap-3"}`}>
                        <li className={`${ isHomePage? "font-inter text-lg" : "font-roboto text-base" } font-normal text-white`}><Link href="/FAQ-Page">FAQ</Link></li>
                        <li className={`${ isHomePage? "font-inter text-lg" : "font-roboto text-base" } font-normal text-white`}><Link href="">Term & Condition</Link></li>
                        <li className={`${ isHomePage? "font-inter text-lg" : "font-roboto text-base" } font-normal text-white`}><Link href="">Reporting</Link></li>
                        <li className={`${ isHomePage? "font-inter text-lg" : "font-roboto text-base" } font-normal text-white`}><Link href="">Documentation</Link></li>
                        <li className={`${ isHomePage? "font-inter text-lg" : "font-roboto text-base" } font-normal text-white`}><Link href="">Support Policy</Link></li>
                        <li className={`${ isHomePage? "font-inter text-lg" : "font-roboto text-base" } font-normal text-white`}><Link href="">Privacy</Link></li>
                    </ul>                    
                </div>
                <div className={`flex flex-col gap-5 ${isHomePage? "w-[23%]" : "w-[26%]" } `}>
                    <h1 className="font-roboto font-bold text-xl text-white">Recent Post</h1>
                    {isHomePage && 
                        <div className="flex flex-col gap-[16px]">
                            {
                                detailsH.map((info, index) => {
                                    return(
                                        <div className="flex" key={index}>
                                            <Component73H 
                                                key={index}
                                                image={info.image}
                                                text={info.text}
                                                date={info.date}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                    {!isHomePage && 
                        <div className="flex flex-col gap-[4px]">
                            {
                                details.map((info, index) => {
                                    return(
                                        <div className="flex" key={index}>
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
                    }                
                </div>
            </div>
            {isHomePage && 
                    <div className="absolute z-10 -bottom-1 left-[87%] w-screen">
                        <Image 
                            src="/homeb.png"
                            alt=""
                            height={375}
                            width={315}
                            layout="intrinsic"
                         />
                    </div>
                }
            <div className={`flex bg-[#4F4F4F] justify-center items-center w-screen px-[200px] py-7`}>
               
                <div className="flex flex-row justify-center items-center w-full">
                    <div className="flex justify-start items-center w-9/12">
                        <h1 className="font-inter font-normal text-sm text-white">Copyright © 2024 by Muhammad Saadullah. All Rights Reserved.</h1>
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

