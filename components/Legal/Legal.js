export default function Legal({title,description}){
    return (
        <div className="px-8 lg:px-32 py-12 flex flex-col gap-4">
            <h1 className="text-xl font-bold">{title}</h1>
            <div className="border border-white rounded-lg p-4 flex flex-col gap-4">
                <p>
                   {description}
                </p>
            </div>
        </div>
    )
}