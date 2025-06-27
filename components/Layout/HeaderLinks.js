"use client"

import { usePathname } from "next/navigation"

export default function HeaderLinks(){
    const pathname = usePathname()
    return (
        <ul className="gap-4 items-center justify-center hidden lg:flex justify-self-start">
            <li><a href="/" className={`${pathname==="/"?"text-primary":null} hover:text-primary transition duration-500`}>Home</a></li>
            <li><a href="/products" className={`${pathname.startsWith("/products")?"text-primary":null} hover:text-primary transition duration-500`}>Products</a></li>
            <li><a href="/portfolio" className={`${pathname.startsWith("/portfolio")?"text-primary":null} hover:text-primary transition duration-500`}>Portfolio</a></li>
            <li><a href="/about" className={`${pathname.startsWith("/about")?"text-primary":null} hover:text-primary transition duration-500`}>About</a></li>
        </ul>
    )
}