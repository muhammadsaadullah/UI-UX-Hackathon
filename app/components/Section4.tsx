import Image from "next/image"
export default function Section4() {
    return(
        <div className="flex flex-row px-[200px] w-screen mt-2" style={{height: "75vh"}}>
            {/* Images Gallery */} 
            <div className="flex flex-col w-1/2 gap-5">
                <div className="flex flex-row items-end h-1/2 overflow-hidden gap-5">
                    <div className="flex rounded-md rounded-t-md w-1/2 h-full bg-[#c4c4c4] overflow-hidden relative"><Image src="/gal1.jpeg" alt=""  height={1000} width={1000} objectFit="cover"  className="rounded-md rounded-t-md"/></div>
                    <div className="flex rounded-md w-1/2 h-3/4 bg-[#c4c4c4]"><Image src="/img2.jpeg" alt=""  height={1000} width={1000} className="rounded-md"/></div>
                </div>

                <div className="flex h-1/2 w-full">
                    <div className="flex flex-row justify-between gap-5 w-full h-full overflow-hidden">
                        <div className="flex items-center w-5/12 h-[89%] overflow-hidden rounded-md bg-[#c4c4c4]"><Image src="/unsplashCLMpC9UhyTo.jpeg" alt=""  height={1000} width={1000} className="rounded-md"/></div>
                        <div className="flex items-start w-4/12 h-[65%] overflow-hidden rounded-md bg-[#c4c4c4]"><Image src="/gal4.jpeg" alt=""  height={1000} width={1200} objectFit="cover" className="-mt-2 rounded-md"/></div>
                        <div className="flex flex-col w-[28%] h-full gap-5 overflow-hidden">
                            <div className="h-1/2 rounded-md bg-[#c4c4c4] relative"><Image src="/gal5.jpeg" alt=""  layout="fill" objectFit="cover" className="rounded-md"/></div>
                            <div className="h-1/2 rounded-md bg-[#c4c4c4] relative"><Image src="/gal6.jpeg" alt=""  layout="fill" objectFit="cover" className="rounded-md"/></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Text */}
            <div className="flex flex-col justify-center w-1/2 ml-24 mb-10 gap-5">
                <h1 className="font-greatvibes font-normal text-[32px] text-primary-orange3">
                    Why Choose us
                </h1>
                <h1 className="font-roboto font-bold text-5xl -mt-4 text-white">
                    <span className="text-primary-orange3">Ex</span>ta ordinary taste <br />And Experienced 
                </h1>
                <h1 className="font-inter font-normal text-base mb-5 mt-3 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam 
                    pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit 
                    augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis 
                    sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
                    consequat.
                </h1>
                <div className="flex flex-row w-[50%] h-[11.5%] gap-5 -mt-2 mb-8">
                    <div className="flex flex-col gap-1 h-full w-1/3"> 
                        <div className="flex justify-center items-center rounded-md h-full bg-primary-orange3 aspect-square"><Image src="/hamburger.png" alt="" height={47} width={47}/></div>
                        <h1 className="font-inter font-normal text-sm text-center text-white">Fast Food</h1>
                    </div> 
                    <div className="flex flex-col gap-1 h-full w-1/3"> 
                        <div className="flex justify-center items-center rounded-md h-full bg-primary-orange3 aspect-square"><Image src="/cookie.png" alt="" height={47} width={47}/></div>
                        <h1 className="font-inter font-normal text-sm text-center text-white">Lunch</h1>
                    </div>
                    <div className="flex flex-col gap-1 h-full w-1/3"> 
                        <div className="flex justify-center items-center rounded-md h-full bg-primary-orange3 aspect-square"><Image src="/wine.png" alt="" height={47} width={47}/></div>
                        <h1 className="font-inter font-normal text-sm text-center text-white">Dinner</h1>
                    </div>
                </div>
                <div className="flex flex-row bg-white w-[50%] h-[11%] z-0 rounded-md">
                    <div className="bg-primary-orange3 w-2 rounded-l-md"></div>
                    <div className="flex items-center justify-end w-1/2 pr-10  ">
                        <h1 className="font-roboto font-bold text-4xl text-primary-orange3">30+</h1>
                    </div>
                    <div className="flex flex-col w-1/2 justify-center -ml-2 gap-2">
                        <h1 className="font-inter font-normal text-base text-black leading-3">Years of</h1>
                        <h2 className="flex font-roboto font-bold text-lg text-black leading-3 items-start text-start">Experienced</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}