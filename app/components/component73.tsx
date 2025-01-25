import Image from "next/legacy/image";
export default function Component73(props:any) {
    return (
        <div className="bg-black justify-center items-center">
            <div className="flex flex-row w-fit items-center justify-center  ">
                <div className="flex gap-2 w-[30%]">
                    <Image
                    src="/unsplashCLMpC9UhyTo.jpeg"
                    alt="broast image"
                    width={100}
                    height={100}
                    className="aspect-square"
                    />
                </div>
                <div className="flex flex-col gap-[8px] pl-3 pt-1 h-20 w-[70%] justify-start items-start">
                    <h1 className="font-roboto font-normal text-sm text-white w-full">{props.text}</h1>
                    {/* <h1 className="font-roboto font-normal text-base text-white">{props.text1} {props.text2}</h1> */}
                    <h2 className="font-roboto font-normal text-xs text-white opacity-[0.49]">{props.date}</h2>
                </div>
            </div>
        </div> 
    );
  }


  