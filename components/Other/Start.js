import Wrapper from "./Wrapper"

export default function Start(){
    return (
        <Wrapper>
            <div className="flex flex-col py-8 border border-white rounded-lg items-center gap-4">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-4xl font-bold">Ready To Get Started?</h1>
                    <p className="text-xl text-secondary">It is time to make your dreams a reality.</p>
                </div>
                <a href="/contact" className="w-32 h-12 border border-white text-white rounded-lg flex items-center justify-center hover:scale-110 transition duration-500">Start</a>
            </div>
        </Wrapper>
    )
}