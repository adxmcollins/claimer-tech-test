import React from 'react'
import { render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import { QuizProvider } from '../../../context'

import { useQuizContext } from '../../../hooks'

import { Results } from '..'

jest.mock('../../../hooks', () => ({
  useQuizContext: () => {
    const {questions} = require('../../../data/questions')
    const {CreateQuiz} = require('../../../factories/quiz')
    const {getQuestion} = CreateQuiz(questions)

    return({
      answers: {
        name: 'Adam',
        email: 'adam@me.com',
        sport: 'tennis',
        tennisPlayer: 'Andy Murray',
        emailConsent: 'no'
      },
      getQuestion
    })
  }
}))

describe('Results:', () => {
  const wrapper: React.FC = ({children}) => (
    <QuizProvider>{children}</QuizProvider>
  )

  test('Renders list of answers', () => {
    render(
      <QuizProvider>
        <Results />
      </QuizProvider>
    )

    // check that completion title exists
    const completeText = screen.getAllByText('Thank You!')
    expect(completeText.length).toEqual(1)

    const {result} = renderHook(() => useQuizContext(), {wrapper})
    const {answers, getQuestion} = result.current

    // check that all answers are printed on the screen
    Object.keys(answers).forEach(answer => {
      const question = getQuestion(answer)
      const displayQuestion = screen.getAllByText(question?.displayName || '')
      expect(displayQuestion.length).toEqual(1)
    })
  })
})
