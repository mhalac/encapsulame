"use client"

import { useEffect } from "react";

export default function CapsulaUI() {
    
    const data_header = new Headers();
    data_header.append("Intent","capsulas")
    const data = fetch("http://localhost:3000/api/account",{
      method:"GET",
      headers:data_header
    })



    return(
        <div></div>
    )
}