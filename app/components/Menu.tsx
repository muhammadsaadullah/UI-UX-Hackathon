import Image from "next/legacy/image";
export default function Menu(props:any) {
    return (
        <div className="flex">
            <div className="flex flex-row gap-2">
                <div className="flex w-[25%] rounded-md aspect-square overflow-hidden ">
                    <Image 
                        src={props.image} 
                        alt="" 
                        width={100} 
                        height={100}
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-md aspect-square"
                    />
                </div>

                <div className="flex flex-col items-start content-between w-[95%] gap-[6px] justify-start">
                    <h1 className="font-inter font-bold text-xl text-white leading-5">{props.h1}</h1>
                    <h2 className="font-inter font-normal text-xs text-white leading-5">{props.body}</h2>
                    <h2 className="font-inter font-bold text-lg text-primary-orange3 leading-5">{props.price}</h2>
                </div>
            </div>
        </div>
    )
}