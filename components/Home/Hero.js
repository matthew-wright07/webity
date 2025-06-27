import Wrapper from "../Wrappers/Wrapper";

export default function Hero(){
    return(
        <Wrapper>
        <div className="flex justify-between">
            <div className="w-full xl:w-1/2 flex flex-col gap-8">
                <h1 className="text-6xl font-bold">We are the world&#8217;s leading web service company.</h1>
                <p className="text-xl text-secondary">At Webity, we specialize in creating stunning, user-friendly websites tailored to your needs. Whether you&#8217;re looking for an e-commerce platform, a personal blog, or a custom-built website, we have the tools and expertise to bring your vision to life as the best web development agency.</p>
                <div className="flex gap-4">
                    <a href="/contact" className="w-32 h-12 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition duration-500">Start</a>
                    <a href="/about" className="w-32 h-12 border border-white text-white rounded-lg flex items-center justify-center hover:scale-110 transition duration-500">Learn More</a>
                </div>
            </div>
            <img src="homeimage.svg" className="h-full hidden xl:block"/>
        </div>
        </Wrapper>
    )
}