"use client"

import { useState } from "react"

export default function Question({question,answer}){
    const [clicked,setClicked] = useState(false)
    function handleClick(){
        setClicked(!clicked)
    }
    return (
        <div className="flex flex-col gap-4">
            <div onClick={handleClick} className={`w-full ${clicked?"bg-secondary":"bg-primary"} rounded-lg p-4 flex justify-between items-center hover:cursor-pointer hover:bg-secondary transition duration-500`}>
                <h1>{question}</h1>
                <img src="/downarrow.svg" className={`h-4 ${clicked?"rotate-180":null} transition duration-500`}/>
            </div>
            {clicked?
            <div onClick={handleClick} className="w-full border border-white rounded-lg p-4 flex justify-between items-center hover:cursor-pointer">
                <h1>{answer}</h1>
            </div>
            :null}
        </div>
    )
}