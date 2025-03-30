export default function PricingCard({name,price,features,type}){
    return (
        <div className={`${type==="standard"?"border border-white":"bg-primary"} rounded-lg px-4 py-10 flex flex-col gap-2 text-center items-center`}>
            <h1 className="text-2xl font-bold">{name}</h1>
            <h1 className="text-4xl font-bold">${price}</h1>
            {features.map(current=>{
                return (
                <div className="flex gap-2 justify-center">
                    <img src="/check.svg" className="w-5"/>
                    <p className="">{current}</p>
                </div>
                )
            })}
            <a href="/contact" className={`w-32 h-12 ${type==="standard"?"border border-white text-white":"bg-white text-primary"} rounded-lg flex items-center justify-center hover:scale-110 transition duration-500`}>Start</a>
        </div>
    )
}