import Image from "next/legacy/image"
export default function Testimonials(){
    return(
        <div className="flex flex-col px-[200px] w-screen gap-16 justify-center items-center">
            <div className="flex flex-col justify-start items-start w-full mb-12">
                <h1 className="font-greatvibes font-normal text-[32px] leading-10 text-primary-orange3">Testimonials</h1>
                <h1 className="font-roboto font-bold text-[40px] text-white">What our client are saying</h1>
            </div>
            {/* <div className="w-[79%] h-[415px] mt-14 bg-white drop-shadow-[0_0_80px_rgba(205,205,205,0.25)] ">
                <Image src="/unsplash_Ioq6qEibtbU.png" alt="" width={396} height={500}  className="absolute -mr-[114px] -top-15 right-[-20px] scale-[106%] transform -rotate-[6 deg]"/>
            </div> */}

            {/* <div className="w-[79%] h-[415px] mt-14 bg-white drop-shadow-[0_0_80px_rgba(205,205,205,0.25)]">
            </div> */}
             
            <div className="flex flex-col w-[69%] h-[55vh] relative bg-white justify-center items-center">
                <div className="absolute -right-[135px] -top-6">
                    <Image src="/flower.png" alt="" width={396} height={500}  className="scale-[106%] transform -rotate-[6 deg]"/>
                </div>
                <div className=" flex absolute h-32 w-32 rounded-full -top-[17%] border border-black">
                    <Image src="/person1.jpeg" alt="" width={133} height={134} className="rounded-full"/>   
                </div>
                <div className="flex flex-col gap-5 mt-8 justify-center items-center">
                    <div className="flex justify-center items-center ">
                        <Image src="/Quotes.png" alt="" width={48} height={48}/>
                    </div>
                    <h1 className="font-roboto font-normal text-base text-center  text-gray2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque <br />bibendum 
                        non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat <br />pretium donec id 
                        elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac <br />dapibus sit eu velit in consequat.
                    </h1>
                    <div className="flex flex-col gap-3 justify-center items-center mt-3 -mb-8">
                        <div className="flex flex-row gap-2">
                            <Image src="/star  filled.png" alt="" width={24} height={24}/>
                            <Image src="/star  filled.png" alt="" width={24} height={24}/>
                            <Image src="/star  filled.png" alt="" width={24} height={24}/>
                            <Image src="/star  filled.png" alt="" width={24} height={24}/>
                            <Image src="/star .png" alt="" width={24} height={24}/>
                        </div>
                        <h1 className="font-roboto font-bold text-2xl pb-1">Alamin Hasan</h1>
                        <h1 className="font-roboto font-normal text-base -mt-2">Food Specialist</h1>
                    </div>
                </div>
            </div>             
            <div className="flex flex-row gap-2 mb-5 -mt-5">
                <div className=" bg-primary-orange3 w-4 h-4 rounded-full"></div>
                <div className=" bg-primary-orange3 w-4 h-4 rounded-full opacity-30"></div>
                <div className=" bg-primary-orange3 w-4 h-4 rounded-full opacity-30"></div>
                <div className=" bg-primary-orange3 w-4 h-4 rounded-full opacity-30"></div>
            </div>
        </div>
    )
}