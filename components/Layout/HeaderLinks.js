"use client"

import { usePathname } from "next/navigation"

export default function HeaderLinks(){
    const pathname = usePathname()
    return (
        <ul className="gap-4 items-center justify-center hidden lg:flex">
            <li><a href="/" className={`${pathname==="/"?"text-primary":null} hover:text-primary transition duration-500`}>Home</a></li>
            <li><a href="/products" className={`${pathname.startsWith("/products")?"text-primary":null} hover:text-primary transition duration-500`}>Products</a></li>
            <li><a href="/reviews" className={`${pathname.startsWith("/reviews")?"text-primary":null} hover:text-primary transition duration-500`}>Reviews</a></li>
            <li><a href="/about" className={`${pathname.startsWith("/about")?"text-primary":null} hover:text-primary transition duration-500`}>About</a></li>
        </ul>
    )
}