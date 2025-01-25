import Image from "next/legacy/image"
export default function Section3() {
  return (
    <div className="flex flex-col px-[200px] w-screen">

        <h1 className="font-greatvibes font-normal text-center text-[32px] text-primary-orange3   ">
            Food Category
        </h1>
        <h1 className="font-roboto font-bold text-5xl mb-10 text-center text-white   ">
            <span className="text-primary-orange3">Ch</span>oose Food Iteam
        </h1>
        <div className="grid grid-cols-4 gap-6 h-[310px] overflow-hidden   ">
            <div className="flex relative overflow-hidden rounded-md items-center justify-center h-full">
                <Image src="/img1.jpeg" alt="" width={309} height={329} objectFit="cover" objectPosition="center" className="rounded-md" />
                <div className="flex absolute inset-0 z-10 flex-col justify-center items-end self-center w-[180px] h-[97px] gap-3">
                    <div className="flex w-[60%] h-[46px] justify-center items-center bg-white rounded-md"          ><h1 className="font-inter font-bold text-lg text-center text-primary-orange3">Save 30%</h1></div>
                    <div className="flex w-full  h-[46px] justify-center items-center bg-primary-orange3 rounded-md"><h1 className="font-inter font-bold text-lg text-center text-white">Fast Food Dish</h1></div>
                </div>
            </div>
            <div className="overflow-hidden rounded-md flex items-center justify-center h-full">
                <Image src="/img2.jpeg" alt="" width={309} height={329} objectFit="cover" objectPosition="center" className="rounded-md" />
            </div>
            <div className="overflow-hidden rounded-md flex items-center justify-center h-full">
                <Image src="/img3.jpeg" alt="" width={309} height={329} objectFit="cover" objectPosition="center" className="rounded-md" />
            </div>
            <div className="overflow-hidden rounded-md flex items-center justify-center h-full">
                <Image src="/img4.jpeg" alt="" width={309} height={329} objectFit="cover" objectPosition="center" className="rounded-md" />
            </div>
        </div>
    </div>
  )
}