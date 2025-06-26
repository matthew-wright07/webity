import Question from "./Question"
import Wrapper from "./Wrapper"

export default function Questions({questions,title}){
    return (
        <Wrapper>
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl text-white font-bold">{title}</h1>
            {questions.map(current=>{
                return (<Question question={current.question} answer={current.answer}/>)
            })}
        </div>
        </Wrapper>
    )
}