import Image from "next/legacy/image";
export default function Cards(props:any) {
  return (
    <div className="flex">
        <div className="flex h-full relative rounded-md overflow-hidden">
            <div className="flex rounded-md " style={{height: "46vh"}}>
                <Image src={props.image} alt="" width={1000} height={1000} objectFit="cover" objectPosition="center" className="h-full w-full" />
                <div className="flex flex-col absolute inset-0 pl-3 pb-1 justify-center items-start self-end bg-white w-7/12 rounded-bl-md" style={{height: "8vh"}}>
                    <h1 className="font-inter font-bold text-lg">{props.head}</h1>
                    <p className="font-inter font-normal text-sm">{props.subhead}</p>
                </div>
            </div>
        </div>
    </div>
  );
}