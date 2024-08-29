"use client"

import { signOut } from "next-auth/react"

export default function CerrarSesion() {
    signOut({callbackUrl:`http://localhost:3000`});

  
return(
    <div>
        <label htmlFor="">Cerrando session</label>
    </div>
)
}