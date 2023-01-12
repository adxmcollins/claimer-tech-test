import React from 'react'

import { useQuizContext } from '../../hooks'

import { Chevron } from '../../vectors'

export const Results: React.FC = () => {
  const {
    answers,
    getQuestion
  } = useQuizContext()

  return (
    <div className="py-4">
      <h2 className="text-green-500 text-3xl md:text-5xl font-semibold leading-tight">Thank You!</h2>
      <div className="mt-3">
        <h3 className="text-lg md:text-xl text-grey-800">You completed the quiz. See your answers below.</h3>
      </div>
      <ul className="mt-8 bg-grey-100 rounded-md border border-grey-500 p-6 pt-3">
        {Object.keys(answers).map(answer => {
          const question = getQuestion(answer)
          return (
            <li key={answer}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3">
                <h4 className="w-full sm:w-1/2 font-semibold text-grey-1000">{question?.displayName}</h4>
                <p className="w-full sm:w-1/2 text-grey-600">{answers[answer]}</p>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="mt-10">
        <a
          href="/"
          className="bg-green-500 text-white rounded-md px-10 py-4 flex items-center justify-center focus:outline-none"
        >
          <div className="font-semibold text-xl">
            Start Again
          </div>
          <div className="ml-2">
            <Chevron />
          </div>
        </a>
      </div>
    </div>
  )
}
