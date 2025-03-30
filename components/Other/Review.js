export default function Review({name,review}){
    return (
        <div className="border border-white rounded-lg px-4 py-8 flex flex-col gap-2">
            <h1 className="text-2xl">{name}</h1>
            <p>&quot;{review}&quot;</p>
        </div>
    )
}