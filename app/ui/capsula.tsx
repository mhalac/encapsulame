"use client"

export default function Capsula(props:any) {
    return(
        <div className="w-[16vw] h-[32vh] items-center flex flex-col bg-purple-500 rounded-t-[2vh] zig-zag-capsule">
            <h1 className="text-2xl">{props.number}. {props.text}</h1>
            
        </div>
    )
}