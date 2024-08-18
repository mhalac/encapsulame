"use client"
import { useRouter, usePathname } from "next/navigation"

export default function NavDash(props:any) {
    const router = useRouter();

    function goto(){
        router.push(props.direction)
    }
    let base = ""
    console.log(usePathname(),props.direction);
    
    if(usePathname() == props.direction){
        base += "underline";
    }else{
        base += "hover:-translate-y-4";
    }

    return(
        <div>
            <button className={base + " transition min-[4vh] h-[10vh] w-[8vw] text-3xl min-w-[7vw] max-w-screen-2xl rounded-md outline bg-black"} onClick={goto}>
                {props.title}
    
            </button>
        </div>
    )
}