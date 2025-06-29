import Wrapper from "../Wrappers/Wrapper";

export default function Hero(){
    return(
        <Wrapper>
        <div className="flex justify-between">
            <div className="w-full xl:w-1/2 flex flex-col gap-8">
                <h1 className="text-6xl font-bold">We Build Websites That Mean Business.</h1>
                <p className="text-xl text-secondary">We craft clean, modern websites with custom code and a sharp focus on performance. At Webity, every project is designed to look great, function seamlessly, and drive real results for your business, from first click to final conversion. Whether you're launching a new brand or leveling up your online presence, we build with purpose, precision, and your goals in mind.</p>
                <div className="flex gap-4">
                    <a href="/contact" className="w-32 h-12 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition duration-500">Contact</a>
                    <a href="/about" className="w-32 h-12 border border-white text-white rounded-lg flex items-center justify-center hover:scale-110 transition duration-500">Learn More</a>
                </div>
            </div>
            <img src="homeimage.svg" className="h-full hidden xl:block"/>
        </div>
        </Wrapper>
    )
}