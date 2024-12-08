import Link from "next/link"
import Image from "next/image"
export default function Component30 (props:any){
    return(
            <div className="flex flex-row h-full justify-center items-center gap-1">
                <h1 className="font-roboto size-6 font-bold text-white justify-start w-1/6">Food<span className="text-primary-orange3">tuck</span></h1>
                <div className="flex flex-row w-2/5 gap-5">
                    <div><Link href="" className="font-inter font-bold text-primary-orange3 size-4 leading-6">Home</Link></div>
                    <div><Link href="" className="font-inter font-normal text-white size-4 leading-6">Menu</Link></div>
                    <div><Link href="" className="font-inter font-normal text-white size-4 leading-6">Blog</Link></div>
                    <div><Link href="" className="font-inter font-normal text-white size-4 leading-6">Pages</Link></div>
                    <div><Link href="" className="font-inter font-normal text-white size-4 leading-6">About</Link></div>
                    <div><Link href="" className="font-inter font-normal text-white size-4 leading-6">Shop</Link></div>
                    <div><Link href="" className="font-inter font-normal text-white size-4 leading-6">Contact</Link></div>
                </div>
                <div className="justify-self-end justify-center"><Image className="p-1" src="/MagnifyingGlass.png" alt="" width={24} height={24}/></div>
                <div className="justify-self-end justify-center"><Image className="p-1" src="/User.png" alt="" width={24} height={24}/></div>
                <div className="justify-self-end justify-center"><Image className="p-1" src="/Tote.png" alt="" width={24} height={24}/></div>
            </div>
    )
}