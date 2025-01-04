import Link from "next/link"
import Image from "next/image"
export default function Navbar() {
    return (
        <div className="flex flex-col w-screen justify-center items-center gap-5 mt-3">
            <h1 className="font-roboto font-bold text-2xl text-white"><span className="text-primary-orange3">Food</span>tuck</h1>
            <div className="flex flex-row w-9/12 justify-center items-center gap-2">
                <ul className="flex flex-row gap-5 w-11/12 justify-start items-start">
                    <li className="font-inter font-normal text-base text-white flex flex-col"><Link href="">Home</Link><div className="bg-primary-orange3 h-2 w-2 justify-self-center place-self-center rounded-full"></div></li>
                    <li className="font-inter font-normal text-base text-white"><Link href="">Menu</Link></li>
                    <li className="font-inter font-normal text-base text-white"><Link href="">Blog</Link></li>
                    <li className="font-inter font-normal text-base text-white"><Link href="">Pages</Link></li>
                    <li className="font-inter font-normal text-base text-white flex flex-row gap-1 items-center"><Link href="">About</Link><div className="flex items-end w-3 h-3 pb-[2px]"><Image src="/Vector.png" alt="" width={100} height={100}/></div></li>
                    <li className="font-inter font-normal text-base text-white"><Link href="">Shop</Link></li>
                    <li className="font-inter font-normal text-base text-white"><Link href="">Contact</Link></li>
                </ul>
                <form className="flex flex-row w-[25%] bg-transparent outline-none border border-primary-orange3 rounded-full gap-3 p-2 px-4">
                    <input type="text" placeholder="Search..." className="bg-transparent outline-none text-white placeholder-white font-inter font-normal text-base w-4/5 pl-1 "/> 
                    <Image src="/MagnifyingGlass.png" alt="" width={24} height={24}/>
                </form>
                <Image src="/Handbag.png" alt="" width={24} height={24}/>            
                </div>
        </div>
    )
}