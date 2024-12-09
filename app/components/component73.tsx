import Image from "next/image";
export default function Component73(props:any) {
    return (
        <div className="bg-black justify-center items-center">
            <div className="flex flex-row w-fit items-center justify-center  ">
                <div className="flex  gap-2 h-[75px] w-1/4">
                    <Image
                    src="/unsplashCLMpC9UhyTo.jpeg"
                    alt="broast image"
                    width={80}
                    height={130}
                    />
                </div>
                <div className="flex flex-col gap-1 pl-5 h-20 w-3/4">
                    <h1 className="font-roboto font-normal text-base text-white w-full">{props.text}</h1>
                    {/* <h1 className="font-roboto font-normal text-base text-white">{props.text1} {props.text2}</h1> */}
                    <h2 className="font-roboto font-normal text-sm text-white opacity-[0.49]">{props.date}</h2>
                </div>
            </div>
        </div> 
    );
  }


  