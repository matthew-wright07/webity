import HeaderLinks from "./HeaderLinks"
import Modal from "./Modal"
import Wrapper from "../Wrappers/Wrapper"

export default function Header(){
    return(
        <Wrapper>
        <div className="flex justify-between items-center">
            <div className="lg:hidden">
                <Modal/>
            </div>
            <a href="/" className="flex items-center justify-center gap-2 hover:scale-110 transition duration-500">
                <img src="/webitylogo.svg" className="w-10"/>
                <h1 className="text-3xl font-bold">Webity</h1>
            </a>
            <HeaderLinks/>
            <a href="/contact" className="w-24 h-10 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition duration-500">Contact</a>
        </div>
        </Wrapper>
    )
}