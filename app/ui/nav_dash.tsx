"use client"
import { useRouter } from "next/navigation"

export default function NavDash(props:any) {
    const router = useRouter();

    function goto(){
        router.push(props.direction)
    }

    return(
        <div>
            <button className="size-20 bg-red-800" onClick={goto}>
                {props.title}
            </button>
        </div>
    )
}