export default function PortfolioCard({img,href,title,p}){
    return (
        <a href={href} className="flex flex-col items-center text-center hover:scale-105 transition duration-500 border border-white rounded-lg" target="_blank">
            <img src={img} className="rounded-t-lg h-full w-full"/>
            <div className="w-full p-4 flex flex-col gap-2">
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="text-secondary">{p}</p>
            </div>
        </a>
    )
}