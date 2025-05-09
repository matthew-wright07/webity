"use client"

import { usePathname } from "next/navigation"
import Modal from "./Modal"

export default function Header(){
    const pathname = usePathname()
    return(
        <div className="px-8 lg:px-32 flex justify-between items-center py-10">
        <div className="lg:hidden">
            <Modal/>
        </div>
        <a href="/" className="flex items-center justify-center gap-2 hover:scale-110 transition duration-500">
            <img src="/webitylogo.svg" className="w-10"/>
            <h1 className="text-3xl font-bold">Webity</h1>
        </a>
        <ul className="gap-4 items-center justify-center hidden lg:flex">
            <li><a href="/" className={`${pathname==="/"?"text-primary":null} hover:text-primary transition duration-500`}>Home</a></li>
            <li><a href="/products" className={`${pathname.startsWith("/products")?"text-primary":null} hover:text-primary transition duration-500`}>Products</a></li>
            <li><a href="/reviews" className={`${pathname.startsWith("/reviews")?"text-primary":null} hover:text-primary transition duration-500`}>Reviews</a></li>
            <li><a href="/about" className={`${pathname.startsWith("/about")?"text-primary":null} hover:text-primary transition duration-500`}>About</a></li>
        </ul>
        <a href="/contact" className="w-24 h-10 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition duration-500">Contact</a>
        </div>
    )
}