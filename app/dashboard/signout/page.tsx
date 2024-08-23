"use client"

import { signOut } from "next-auth/react"
import { useEffect } from "react"

export default function CerrarSesion() {
    useEffect(()=>{
        signOut({callbackUrl:`http://localhost:3000`});
    })
return(
    <div>

    </div>
)
}