"use client"
import { useState } from "react";

export default function PaginaPrueba() {
    const [testeo, cambiarTesteo] = useState(10);

    return (
        <div>
            <button
                className="bg-black w-20"
                style={{ height: `${testeo}vh` }}
                onClick={() => {
                    cambiarTesteo(prevTesteo => {
                        console.log(prevTesteo + 10); // Log the new value before updating the state
                        return prevTesteo + 10;
                    });
                }}
            >
                TEXTO
            </button>
        </div>
    );
}
