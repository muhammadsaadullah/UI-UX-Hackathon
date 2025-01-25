import Link from "next/link"
import Image from "next/legacy/image"
import { ChevronDown, Search } from 'lucide-react';
export default function Navbar() {
    return (
        <div className="flex flex-col w-screen justify-center items-center gap-5 mt-3">
            <h1 className="font-roboto font-bold text-2xl text-white"><span className="text-primary-orange3">Food</span>tuck</h1>
            <div className="flex flex-row w-9/12 justify-center items-center gap-2">
                <ul className="flex flex-row gap-5 w-11/12 justify-start items-start">
                    <li className="font-inter font-normal text-base text-white flex flex-col"><Link href="/">Home</Link><div className="bg-primary-orange3 h-2 w-2 justify-self-center place-self-center rounded-full"></div></li>
                    <li className="font-inter font-normal text-base text-white"><Link href="/Menu">Menu</Link></li>
                    <li className="font-inter font-normal text-base text-white"><Link href="/BlogPage">Blog</Link></li>
                    <li className="font-inter font-normal text-base text-white"><Link href="">Pages</Link></li>
                    <li className="font-inter font-normal text-base text-white flex flex-row gap-1 -mr-3 items-center"><Link href="/About">About</Link><div className="flex w-5 h-3"><div className="flex w-7 -ml-[8px] mr-3 pr-1 pt-[1px] -mt-[1px] mb-[1px]"><ChevronDown size={17} className="flex w-24"/></div></div></li>
                    <li className="font-inter font-normal text-base text-white"><Link href="/Shop">Shop</Link></li>
                    <li className="font-inter font-normal text-base text-white"><Link href="">Contact</Link></li>   
                </ul>
                <form className="flex flex-row w-[25%] bg-transparent outline-none border border-primary-orange3 rounded-full gap-3 p-2 px-4">
                    <input type="text" placeholder="Search..." className="bg-transparent outline-none text-white placeholder-white font-inter font-normal text-base w-4/5 pl-1 "/> 
                    <Search size="23" className="text-white opacity-85"/>
                    {/* <Image src="/MagnifyingGlass.png" alt="" width={24} height={24}/> */}
                </form>
                <Link href="/ShoppingCart" className="flex justify-center items-center"><Image src="/Handbag.png" alt="" width={24} height={24}/></Link>                       
            </div>
        </div>
    )
}