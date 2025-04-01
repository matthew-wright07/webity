"use client"

import { useState } from "react"

export default function Contact(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [product,setProduct] = useState("webdev")
    const [message,setMessage] = useState("")
    const [done,setDone] = useState(false)

    async function handleClick(){
        const response = await fetch("/api/email",{
            method: "POST",
            body:JSON.stringify({name,email,product,message})
        })
        const data = await response.json()
        setDone(true)
        setName("")
        setEmail("")
        setProduct("")
        setMessage("")
    }

    function handleName(event){
        setName(event.target.value)
    }
    function handleEmail(event){
        setEmail(event.target.value)
    }
    function handleProduct(event){
        setProduct(event.target.value)
    }
    function handleMessage(event){
        setMessage(event.target.value)
    }

    return (
        <div className="px-8 lg:px-32 py-12 flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col justify-center w-full border border-white rounded-lg p-10 gap-4">
                <h1 className="text-2xl font-bold text-center">Contact</h1>
                <div className="flex flex-col gap-2">
                    <label htmlFor="to">To</label>
                    <select name="product" id="product" className="border border-white rounded-lg p-2 hover:cursor-pointer">
                        <option value="webdev" className="text-white bg-black">info@webity.io</option>
                        <option value="uiux" className="text-white bg-black">512-586-4786</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input onChange={handleName} value={name} id="name" className="rounded-lg p-2 border border-white "/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleEmail} value={email} id="email" className="rounded-lg p-2 border border-white "/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="product">Product</label>
                    <select onChange={handleProduct} value={product} name="product" id="product" className="border border-white rounded-lg p-2 hover:cursor-pointer">
                        <option value="webdev" className="text-white bg-black">Web Development</option>
                        <option value="uiux" className="text-white bg-black">UI/UX Design</option>
                        <option value="maintenance" className="text-white bg-black">Website Maintenance</option>
                        <option value="hostingdomain" className="text-white bg-black">Hosting & Domain Services</option>
                        <option value="seomarketing" className="text-white bg-black">SEO & Digital Marketing</option>
                        <option value="mobileapp" className="text-white bg-black">Mobile App Development</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message">Message</label>
                    <textarea onChange={handleMessage} value={message} id="message" className="rounded-lg p-2 border border-white "/>
                </div>
                <div className="flex justify-center">
                    <button onClick={handleClick} className="w-full h-12 bg-primary rounded-lg flex items-center justify-center hover:bg-secondary transition duration-500 hover:cursor-pointer">Submit</button>
                </div>
            </div>
            {done?<p className="text-center">Thank you for submitting. We will get back to you as soon as possible!</p>:null}
        </div>
    )
}