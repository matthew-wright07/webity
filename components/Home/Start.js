import Wrapper from "../Wrappers/Wrapper"

export default function Start(){
    return (
        <Wrapper>
            <div className="py-10 border border-white rounded-lg flex justify-evenly items-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-4xl font-bold">Ready To Get Started?</h1>
                        <p className="text-xl text-secondary">It is time to make your dreams a reality.</p>
                    </div>
                    <a href="/contact" className="w-32 h-12 border border-white text-white rounded-lg flex items-center justify-center hover:scale-110 transition duration-500">Contact</a>
                </div>
            </div>
        </Wrapper>
    )
}