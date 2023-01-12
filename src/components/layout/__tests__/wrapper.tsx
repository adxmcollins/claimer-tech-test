import React from 'react'
import { render, screen } from '@testing-library/react'

import { QuizProvider } from '../../../context'

import { QuestionWrapper } from '..'

jest.mock('../../../hooks', () => ({
  useQuizContext: () => ({
    question: 'name',
    getQuestion: () => {
      return {
        image: '/name.jpg',
        displayName: 'What is your name?',
        field: {
          id: 'name',
          type: 'text',
          name: 'name',
          validation: {
            regex: null
          }
        }
      }
    },
    complete: false,
    isFirstQuestion: false,
    progress: 0,
    answers: {},
  })
}))

describe('QuestionWrapper:', () => {
  test('Renders image correctly', () => {
    render(
      <QuizProvider>
        <QuestionWrapper />
      </QuizProvider>
    )

    const image = screen.getByTestId('image')
    expect(image).toHaveAttribute('src', '/name.jpg')
    expect(image).toHaveAttribute('alt', 'What is your name?')
  })
})
