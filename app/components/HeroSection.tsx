import Navbar from "./Navbar";
import HeroImage from "./HeroImage";

export default function HeroSection() {
    return (
        <div
            className="relative pt-5 gap-10 z-0 bg-cover bg-center overflow-x-hidden overflow-hidden"
            style={{ backgroundImage: "url('/headerbg.jpeg')" }}
        >
            {/* Black Overlay */}
            <div className="absolute inset-0 z-10 bg-black bg-opacity-90"></div>

            {/* Navbar */}
            <div className="absolute w-full z-30">
                <Navbar />
            </div>

            {/* Hero Content */}
            <div className="flex flex-row relative h-full mt-32 py-8 z-20">
                {/* Left Section */}
                <div className="flex flex-row w-6/12 justify-center items-start">
                    {/* Vertical Line and Social Icons */}
                    <div className="flex flex-col justify-start items-center h-full">
                        <div className="h-[160px] w-[1px] border border-white"></div>
                        <div className="flex flex-col gap-3 p-5 my-5 items-center">
                            <div className="flex w-5 h-5 text-center justify-center items-center"><i className="flex fab fa-facebook-f text-white             text-[10px] text-center"></i></div>
                            <div className="flex w-5 h-5 text-center justify-center items-center"><i className="flex fab fa-twitter    text-primary-orange3   text-[10px] text-center"></i></div>
                            <div className="flex w-5 h-5 text-center justify-center items-center"><i className="flex fab fa-pinterest-p  text-white             text-[10px] text-center"></i></div>
                        </div>
                        <div className="h-[130px] w-[1px] border border-white"></div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-center gap-5 w-2/3 mt-[100px]">
                        <h1 className="font-greatvibes font-normal -mb-4 text-[32px] text-primary-orange3">
                            Its Quick & Amusing!
                        </h1>
                        <h1 className="font-roboto font-bold text-6xl mb-2 text-white">
                            <span className="text-primary-orange3">Th</span>e Art of speed food Quality
                        </h1>
                        <h1 className="font-inter font-normal text-base text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Varius sed pharetra dictum neque massa congue
                        </h1>
                        <button className="h-[60px] w-[190px] font-inter font-normal text-base bg-primary-orange3 rounded-[30px] text-[#E0DFDF]">
                            See Menu
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex inset-0 w-6/12 -mt-[65px] -ml-[160px] items-start">
                    <HeroImage />
                </div>
            </div>
        </div>
    );
}
