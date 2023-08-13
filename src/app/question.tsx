import { MouseEventHandler, useState } from 'react'

type QuestionProps = { question: string; answer: string; num: number }

export const Question = (props: QuestionProps) => {
  const [shown, setShown] = useState<boolean>(false)

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    setShown(!shown)
  }

  return (
    <div
      className='col-span-5 bg-slate-900/50 p-4 cursor-pointer rounded-lg border border-white mb-4'
      onClick={handleClick}
    >
      <p>
        {props.num}. {props.question}
      </p>
      <p className='mt-2'>{shown ? props.answer : 'Vis svar'}</p>
    </div>
  )
}
