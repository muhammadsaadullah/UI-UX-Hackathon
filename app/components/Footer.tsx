export default function Footer(){
    return(
        <div className="h-full w-screen bg-secondary-cream2 gap-10 ">
            <div className="flex  gap-10 border-b-2 border-primary-orange3">
                <div className="">
                    <h1 className="font-roboto font-bold text-[32px] text-white leading-10"><span className="text-primary-orange3">St</span>ill You Need Our Support ?</h1>
                    <h1 className="font-roboto font-normal text-base text-white leading-6">Don\’t wait make a smart & logical quote here. Its pretty easy.</h1>
                </div>  
                <div className="flex flex-row w-[30%] h-12 rounded-[4px] bg-primary-orange3  border-2 border-black">
                    <form className="flex flex-row rounded-[4px] w-2/3 bg-primary-orange3 content-center">
                        <input type="email" className="font-inter font-normal text-base pl-5 bg-transparent  text-white/[59]" placeholder="Enter Your Email"/>
                    </form>  
                    <button className="font-inter font-normal text-base justify-center items-center text-primary-orange3 w-1/3 p-3 rounded-[4px] bg-white">Subscribe Now</button> 
                </div>                           
            </div>
            <div className=""></div>
            <div className="flex bg-slate-500 justify-center items-center w-screen p-6">
                <div className="flex flex-row justify-center items-center w-8/12 border-black">
                    <div className="flex justify-start items-center w-9/12">
                        <h1 className="font-inter font-normal text-base text-white">Copyright © 2024 by Muhammad Saadullah. All Rights Reserved.</h1>
                    </div>
                    <div className="flex flex-row gap-3 justify-end bg-slate-500 w-3/12">
                        <div className="w-9 h-8 bg-white rounded-sm text-center place-content-center"><i className="fab fa-facebook-f text-black text-base"></i></div>
                        <div className="w-9 h-8 bg-white rounded-sm text-center place-content-center"><i className="fab fa-twitter text-black text-base"></i></div>
                        <div className="w-9 h-8 bg-white rounded-sm text-center place-content-center"><i className="fab fa-instagram text-black text-base"></i></div>
                        <div className="w-9 h-8 bg-white rounded-sm text-center place-content-center"><i className="fab fa-youtube text-primary-orange3 text-base"></i></div>
                        <div className="w-9 h-8 bg-white rounded-sm text-center place-content-center"><i className="fab fa-pinterest text-black text-base"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

