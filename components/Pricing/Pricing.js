import PricingCard from "./PricingCard"

export default function Pricing({title,pricings}){
    return (
        <div className="px-8 lg:px-32 py-12 flex flex-col gap-4">
            <h1 className="text-4xl font-bold">{title}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {pricings.map(current=>{
                    return (<PricingCard name={current.name} price={current.price} features={current.features} type={current.type}/>)
                })}
            </div>
        </div>
    )
}