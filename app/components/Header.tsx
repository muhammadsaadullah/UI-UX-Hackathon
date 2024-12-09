import Component30 from "./Component30";
import Image from "next/image";

export default function Header(props:any){
  return (
    <div className="h-screen">
      <div className="bg-[url('/unsplash_4ycv3Ky1ZZU.png')] bg-center bg-cover bg-no-repeat h-2/5">
        <div className="bg-black h-1/5">
          <Component30 />
        </div>
        <div className="flex flex-col gap-5 items-center justify-center justify-self-center h-1/5 mt-24">
          <h1 className="font-roboto text-white text-5xl font-bold">{props.title}</h1>
          <div className="flex flex-row gap-1 items-center justify-center justify-self-center">
            <h2 className="font-inter text-white text-xl font-normal">Home</h2>
            <Image 
              src="/CaretRight.png"
              alt="Caret Right"
              width={16}
              height={16}
            />
            <h2 className="font-inter text-primary-orange3 text-xl font-normal">{props.loc}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}   
