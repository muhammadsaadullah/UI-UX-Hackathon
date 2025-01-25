import Image from "next/legacy/image";
export default function Component73(props:any) {
    return (
        <div className="bg-black justify-center items-center">
            <div className="flex flex-row w-fit items-end justify-center">
                <div className="flex w-[28%]">
                    <Image
                    src={props.image}
                    alt="broast image"
                    width={52}
                    height={43}
                    objectFit="cover"
                    objectPosition="center"
                    className="aspect-rectangle"
                    />
                </div>
                <div className="flex flex-col gap-[3px] pl-[10px] w-[78%] justify-center items-start">                                        
                    <h2 className="font-inter font-normal text-xs text-white opacity-[0.49]">{props.date}</h2>
                    <h1 className="font-roboto font-normal text-sm text-white w-full">{props.text}</h1>
                </div>
            </div>
        </div> 
    );
  }


  