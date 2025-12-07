import Wrapper from "../Wrappers/Wrapper";

export default function Legal({title,description}){
    return (
        <Wrapper>
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex flex-col gap-4">
                <p>
                   {description}
                </p>
            </div>
        </div>
        </Wrapper>
    )
}