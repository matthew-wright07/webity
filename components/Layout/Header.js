"use client"

import { usePathname } from "next/navigation"

export default function Header(){
    const pathname = usePathname()
    return(
        <div className="px-8 lg:px-32 flex justify-between items-center h-32 py-12">
        <a href="/" className="flex items-center justify-center gap-2">
        <img src="/webifylogo.svg" className="w-10"/>
        <h1 className="text-3xl font-bold">Webity</h1>
        </a>
        <ul className="flex gap-4 items-center justify-center">
            <li><a href="/" className={`${pathname==="/"?"text-primary":null} hover:text-primary transition duration-500`}>Home</a></li>
            <li><a href="/products" className={`${pathname.startsWith("/products")?"text-primary":null} hover:text-primary transition duration-500`}>Products</a></li>
            <li><a href="/reviews" className={`${pathname.startsWith("/reviews")?"text-primary":null} hover:text-primary transition duration-500`}>Reviews</a></li>
            <li><a href="/about" className={`${pathname.startsWith("/about")?"text-primary":null} hover:text-primary transition duration-500`}>About</a></li>
        </ul>
        <a href="/contact" className="w-24 h-10 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition duration-500">Contact</a>
        </div>
    )
}