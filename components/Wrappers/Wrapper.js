"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Wrapper({children}){
    useEffect(() => {
    AOS.init({
        once: false,
        mirror: true,
    });
    }, []);
    return (
        <div className="px-8 lg:px-16 py-10" data-aos="zoom-in" data-aos-duration="600">
            {children}
        </div>
    )
}