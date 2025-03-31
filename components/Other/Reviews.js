import Review from "./Review"

export default function Reviews({reviews,more}){
    return(
        <div className="px-8 lg:px-32 py-12 flex flex-col gap-4">
            <h1 className="text-2xl text-white font-bold">Reviews</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    reviews.map(current=>{
                        return (
                            <Review name={current.name} review={current.review}/>
                        )
                    })
                }
                {more!=="false"?<a href="/reviews" className="w-32 h-12 bg-primary text-white rounded-lg flex items-center justify-center hover:scale-110 transition duration-500">More</a>:null}
            </div>
        </div>
    )
}