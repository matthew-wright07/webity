import Wrapper from "../Wrappers/Wrapper";
import PortfolioCard from "./PortfolioCard";

export default function Portfolio({more,data}){
    return (
        <Wrapper>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Portfolio</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data.map(current=>{
                        return <PortfolioCard img={current.img} href={current.href} title={current.title} p={current.p}/>
                    })}
                </div>
                {more==="true"?<a href="/portfolio" className="w-32 h-12 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition duration-500">More</a>:null}
            </div>
        </Wrapper>
    )
}