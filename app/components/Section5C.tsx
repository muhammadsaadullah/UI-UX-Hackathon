import Image from "next/image"
export default function Section5C(props: any) {
    return (
        <div className="flex">
            <div className="flex flex-col gap-5 items-center justify-center">
                <div className="flex justify-center items-center"><Image src={props.image} alt="" height={120} width={120}/></div>
                <h1 className="font-roboto font-bold text-center text-[24px] text-white">{props.heading1}</h1>
                <h1 className="font-roboto font-bold text-center text-[40px] text-white">{props.heading2}</h1>
            </div>
        </div>
    )
}