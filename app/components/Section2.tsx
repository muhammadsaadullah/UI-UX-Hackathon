import Image from "next/image";

export default function Section2() {
    return (
        <div className="flex px-[300px] gap-28 w-screen" style={{ height: "66vh" }} >
            <div className="flex flex-row h-full w-full">
                <div className="flex flex-col w-[45%] mr-28 justify-start justify-self-start gap-5">
                    <h1 className="font-greatvibes font-normal text-[32px] text-primary-orange3">
                        About us
                    </h1>
                    <h1 className="font-roboto font-bold text-5xl -mt-2 text-white">
                        <span className="text-primary-orange3">We</span> Create the best <br />foody product
                    </h1>
                    <h1 className="font-inter font-normal text-base my-5 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br />
                        pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit <br />
                        augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis <br />
                        sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in <br />consequat.
                    </h1>
                    <div className="flex flex-col gap-7">
                        <div className="flex flex-row gap-2 justify-start items-center">
                            <i className="fa fa-check text-white text-[20px]"></i>
                            <p className="font-inter font-normal text-lg text-white">Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                        </div>
                        <div className="flex flex-row gap-2 justify-start items-center">
                            <i className="fa fa-check text-white text-[20px]"></i>
                            <p className="font-inter font-normal text-lg text-white">Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
                        </div>
                        <div className="flex flex-row gap-2 justify-start items-center">
                            <i className="fa fa-check text-white text-[20px]"></i>
                            <p className="font-inter font-normal text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                    <button className="h-[60px] w-[190px] font-inter font-normal mt-6 text-base bg-primary-orange3 rounded-[30px] text-white">
                        Read More
                    </button>
                </div>

                {/* Images Section */}
                <div className="flex flex-col h-full w-1/2 gap-5 justify-self-end">
                    <div className="flex flex-row h-[64%] overflow-hidden items-center justify-center">
                        <Image
                            src="/img1.0.jpeg"
                            alt="boiled eggs on a sandwich"
                            height={1000}
                            width={1000}
                            objectFit="cover"
                            objectPosition="center"
                            className="rounded-md"
                        />
                    </div>
                    <div className="flex flex-row h-[35%] gap-5 mb-10 overflow-hidden items-center justify-center">
                        <div className="flex w-1/2  overflow-hidden">
                            <Image
                                src={"/img1.1.jpeg"}
                                alt="prawns"
                                width={1000}
                                height={1000}
                                objectFit="cover"
                                objectPosition="center"
                                className="rounded-md"
                            />
                        </div>
                        <div className="flex w-1/2 overflow-hidden">
                            <Image
                                src={"/img1.2.jpeg"}
                                alt="brown bread sandwich"
                                height={1000}
                                width={1000}
                                objectFit="cover"
                                objectPosition="center"
                                className="rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
