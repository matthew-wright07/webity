import Question from "./Question"

export default function Questions({questions,title}){
    return (
        <div className="px-8 lg:px-32 py-12 flex flex-col gap-4">
            <h1 className="text-2xl text-white font-bold">{title}</h1>
            {questions.map(current=>{
                return (<Question question={current.question} answer={current.answer}/>)
            })}
        </div>
    )
}