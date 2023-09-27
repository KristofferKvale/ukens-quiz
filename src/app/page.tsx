import { Questions } from './questions'
import questions from './questions.json'

export default function Home() {
  const yearWeek = '2023-39'

  const split = yearWeek.split('-')
  const year = split[0]
  const week = split[1]

  return (
    <main className='grid grid-cols-5 min-h-screen min-w-screen pb-8 px-14 bg-gradient-to-b from-slate-900'>
      <div className='col-span-5 grid grid-rows-3 mb-8'>
        <h1 className='row-start-2 text-center text-2xl align-middle cursor-default'>
          Ukens quiz
        </h1>
      </div>
      <div className='col-start-3 grid grid-cols-3 pb-8'>
        <a>
          <p className='text-4xl text-slate-500 cursor-not-allowed'>{'<'}</p>
        </a>
        <div>
          <p className='text-center cursor-default'>{year}</p>
          <p className='text-center cursor-default'>{week}</p>
        </div>
        <a>
          <p className='text-4xl text-right text-slate-500 cursor-not-allowed'>
            {'>'}
          </p>
        </a>
      </div>
      <Questions
        questionList={{
          question1: questions[yearWeek].Question1,
          answer1: questions[yearWeek].Answer1,
          question2: questions[yearWeek].Question2,
          answer2: questions[yearWeek].Answer2,
          question3: questions[yearWeek].Question3,
          answer3: questions[yearWeek].Answer3,
          question4: questions[yearWeek].Question4,
          answer4: questions[yearWeek].Answer4,
          question5: questions[yearWeek].Question5,
          answer5: questions[yearWeek].Answer5,
        }}
      />
    </main>
  )
}
