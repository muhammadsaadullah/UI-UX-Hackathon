import Image from "next/image"
export default function Testimonials(){
    return(
        <div className="flex flex-col gap-12 justify-self-center justify-center items-center w-8/12 ">
            <div className="flex flex-col justify-start items-start w-full mb-6">
                <h1 className="font-greatvibes font-normal text-[32px] leading-10 text-primary-orange3">Testimonials</h1>
                <h1 className="font-roboto font-bold text-5xl text-black">What our client are saying</h1>
            </div>
            <div className="w-[75%] h-[375px] mt-14 bg-white drop-shadow-[0_0_80px_rgba(205,205,205,0.25)] ">
                <Image src="/unsplash_Ioq6qEibtbU.png" alt="" width={396} height={500}  className="absolute -mr-[114px] -top-14 right-[-20px] scale-90 transform -rotate-[9deg]"/>
            </div>
            <div className="flex flex-col w-[59%] fixed gap-5 justify-center items-center ">
                <div className=" flex  h-32 w-32 rounded-full border border-black">
                    <Image src="/person1.jpeg" alt="" width={133} height={134} className="rounded-full"/>   
                </div>
                <Image src="/Quotes.png" alt="" width={48} height={48}/>
                <h1 className="font-roboto font-normal w-[75%] text-lg text-center text-gray2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum 
                    non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id 
                    elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </h1>
                <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="flex flex-row gap-2">
                        <Image src="/star  filled.png" alt="" width={24} height={24}/>
                        <Image src="/star  filled.png" alt="" width={24} height={24}/>
                        <Image src="/star  filled.png" alt="" width={24} height={24}/>
                        <Image src="/star  filled.png" alt="" width={24} height={24}/>
                        <Image src="/star .png" alt="" width={24} height={24}/>
                    </div>
                    <h1 className="font-roboto font-bold text-2xl pd-2">Alamin Hasan</h1>
                    <h1 className="font-roboto font-normal text-base">Food Specialist</h1>
                </div>
            </div>             
            <div className="flex flex-row gap-2 mb-5 ">
                <div className=" bg-primary-orange3 w-4 h-4 rounded-full"></div>
                <div className=" bg-primary-orange3 w-4 h-4 rounded-full opacity-30"></div>
                <div className=" bg-primary-orange3 w-4 h-4 rounded-full opacity-30"></div>
                <div className=" bg-primary-orange3 w-4 h-4 rounded-full opacity-30"></div>
            </div>
        </div>
    )
}