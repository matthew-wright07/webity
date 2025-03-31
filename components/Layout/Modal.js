import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Modal(){
    const pathname = usePathname()
    const [open,setOpen] = useState(false)
    function handleClick(){
        setOpen(!open)
    }
    return (
        <>
        {!open?
        <img className="w-10 hover:cursor-pointer hover:scale-110 transition duration-500" src="/modalopen.svg" onClick={handleClick}/>
        :
        <dialog className="bg-black h-screen w-screen fixed top-0 left-0 text-white pr-[17px]" open>
            <div className="px-8 py-10 flex justify-between items-center">
                <img className="w-10 hover:cursor-pointer hover:scale-110 transition duration-500" src="/modalclose.svg" onClick={handleClick}/>
                <a href="/" className="flex items-center justify-center gap-2">
                <img src="/webifylogo.svg" className="w-10"/>
                <h1 className="text-3xl font-bold">Webity</h1>
                </a>
                <a href="/contact" className="w-24 h-10 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition duration-500">Contact</a>
            </div>
            <div className="h-7/8">
                <ul className="flex flex-col items-center justify-center h-full">
                    <a href="/" className={`hover:bg-primary transition duration-500 text-white h-1/4 w-full flex justify-center items-center text-2xl font-bold border-t border-white`}>Home</a>
                    <a href="/products" className={`hover:bg-primary transition duration-500 h-1/4 w-full flex justify-center items-center text-2xl font-bold border-t border-white`}>Products</a>
                    <a href="/reviews" className={`hover:bg-primary transition duration-500 h-1/4 w-full flex justify-center items-center text-2xl font-bold border-t border-white`}>Reviews</a>
                    <a href="/about" className={`hover:bg-primary transition duration-500 h-1/4 w-full flex justify-center items-center text-2xl font-bold border-t border-white`}>About</a>
                </ul> 
            </div>
        </dialog>
        }
        </>
    )
}