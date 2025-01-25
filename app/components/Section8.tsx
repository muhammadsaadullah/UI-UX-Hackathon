import { Play } from 'lucide-react';
export default function Section8 (){
    return (
        <div
            className="w-screen bg-cover bg-center overflow-x-hidden overflow-hidden"
            style={{ backgroundImage: "url('/bgsec8.jpeg')" }}
        >
            <div className="flex flex-col mr-[15.6vw] m-20 justify-end items-end">
                <h1 className="font-greatvibes font-normal text-3xl text-end text-primary-orange3">
                    Restaurant Active Process
                </h1>
                <h1 className="font-roboto font-bold text-[40px] leading-[50px] mb-2 text-end text-white">
                    <span className="text-primary-orange3">We</span> Document Every Food <br />
                    Bean Process untile it is saved
                </h1>
                <h1 className="font-roboto font-normal my-5 text-sm text-end text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque <br />
                    bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, 
                </h1>
                <div className="flex flex-row gap-5 justify-end items-center">
                    <button className=" w-36 h-12 border border-primary-orange3 rounded-[30px] bg-transparent text-white font-inter font-bold text-sm">Read More</button>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <button className="w-12 h-12 bg-primary-orange3 rounded-full text-white"><div className='flex justify-center items-center'><Play/></div>{/*<i className="fa-thin fa-play"></i>*/}</button>
                        <h1 className="font-inter font-bold text-sm text-white">Play Video</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}