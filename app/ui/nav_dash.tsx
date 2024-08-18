"use client"
import { useRouter } from "next/navigation"

export default function NavDash(props:any) {
    const router = useRouter();

    function goto(){
        router.push(props.direction)
    }

    return(
        <div>
            <button className="h-[13vh] w-[8vw] text-3xl  bg-red-800" onClick={goto}>
                {props.title}
            </button>
        </div>
    )
}