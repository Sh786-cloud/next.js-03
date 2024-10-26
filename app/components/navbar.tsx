"use client"
import React from "react";
import { useRouter } from "next/navigation";

export default function Navbar () {
    const route = useRouter();
    return (
        <nav className="bg-gray-600  p-5  text-white text-1.5xl">
            <div>
                <button onClick={()=>route.push("/")} className="mr-8 hover:text-pink-400">Home</button>
                <button onClick={()=>route.push("/about")} className="mr-8 hover:text-pink-400">About</button>
                <button onClick={()=>route.push("/contact")} className=" hover:text-pink-400">Contact</button>
            </div>
        </nav>
    )
}