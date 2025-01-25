import Image from "next/legacy/image";
import { ThumbsUp, MessageSquareMore, Share2 } from 'lucide-react';
export default function BlogCard(props:any){
    return (
        <div>
            <div className="flex flex-col h-[67vh]">
                <div className="flex h-[60%] overflow-hidden justify-center items-center border-r-[1px]">
                    <Image src={props.image} alt="" width={1000} height={1000} objectFit="cover" objectPosition="center"/>
                </div>
                <div className="flex flex-col gap-2 px-8 py-5 pt-6 border border-t-0">
                    <h1 className="font-inter font-normal text-primary-orange3 text-[14px] mb-1">{props.date}</h1>
                    <h2 className="font-roboto font-bold text-white text-xl">{props.title}</h2>
                    <div className="flex flex-row gap-2 mt-5 justify-center">
                        <h1 className="font-inter font-normal text-sm text-white items-start w-4/5">Learn More</h1>
                        <div className="flex flex-row gap-2 w-1/5 justify-center">
                            <div className="justify-center items-center">
                                <ThumbsUp size="17px" className="text-white justify-self-center"/>
                            </div>
                            <div className="justify-center items-center">
                                <MessageSquareMore size="17px" className="text-primary-orange3 justify-self-center"/>
                            </div>
                            <div className="justify-center items-center">
                                <Share2 size="17px" className="text-white justify-self-center"/>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}