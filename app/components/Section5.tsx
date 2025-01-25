import Image from "next/legacy/image"
export default function Section5() {
  return (
    <div
        className="w-screen relative z-0 bg-cover bg-center overflow-x-hidden overflow-hidden"
        style={{ backgroundImage: "url('/sec5bg.jpeg')" }}
    >
        {/* Black Overlay */}
        <div className="absolute inset-0 z-10 bg-black bg-opacity-80"></div>

        <div className="flex flex-row justify-between items-center relative m-20 z-20 mx-[200px]">
            <div className="flex flex-col gap-5 items-center justify-center">
                <div className="flex justify-center items-center"><Image src="/icon1.png" alt="" height={120} width={120}/></div>
                <h1 className="font-roboto font-bold text-center text-[24px] text-white">Professional Chefs</h1>
                <h1 className="font-roboto font-bold text-center text-[40px] text-white">420</h1>
            </div>
            <div className="flex flex-col gap-5 items-center justify-center">
                <div className="flex justify-center items-center"><Image src="/icon2.png" alt="" height={120} width={120}/></div>
                <h1 className="font-roboto font-bold text-center text-[24px] text-white">Items Of Food</h1>
                <h1 className="font-roboto font-bold text-center text-[40px] text-white">320</h1>
            </div>
            <div className="flex flex-col gap-5 items-center justify-center">
                <div className="flex justify-center items-center"><Image src="/icon3.png" alt="" height={120} width={120}/></div>
                <h1 className="font-roboto font-bold text-center text-[24px] text-white">Years Of Experienced</h1>
                <h1 className="font-roboto font-bold text-center text-[40px] text-white">30+</h1>
            </div>
            <div className="flex flex-col gap-5 items-center justify-center">
                <div className="flex justify-center items-center"><Image src="/icon4.png" alt="" height={120} width={120}/></div>
                <h1 className="font-roboto font-bold text-center text-[24px] text-white">Happy Customers</h1>
                <h1 className="font-roboto font-bold text-center text-[40px] text-white">220</h1>
            </div>
        </div>

    </div>
  )
}