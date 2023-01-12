import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'

import { QuizProvider } from '../../context'

import { questions } from '../../data'

import { useQuizContext } from '..'

describe('useQuizContext:', () => {
  const wrapper: React.FC = ({children}) => (
    <QuizProvider>{children}</QuizProvider>
  )

  test('Submitting questions works as expected', () => {
    const {result} = renderHook(() => useQuizContext(), {wrapper})
    const {question, answers, submitQuestion, isFirstQuestion} = result.current

    expect(question).toEqual('name')
    expect(isFirstQuestion).toEqual(true)
    expect(answers).toEqual({})

    act(() => submitQuestion('Adam'))

    const newState = result.current
    expect(newState.question).toEqual('email')
    expect(newState.progress).toEqual(20)
    expect(newState.answers).toEqual({
      name: 'Adam'
    })
  })

  test('Getting questions by ID works as expected', () => {
    const {result} = renderHook(() => useQuizContext(), {wrapper})
    const {getQuestion} = result.current

    expect(getQuestion('name')).toEqual(questions[0])
    expect(getQuestion('email')).toEqual(questions[1])
    expect(getQuestion('sport')).toEqual(questions[2])
    expect(getQuestion('footballTeam')).toEqual(questions[3])
    expect(getQuestion('tennisPlayer')).toEqual(questions[4])
    expect(getQuestion('formulaOneTrack')).toEqual(questions[5])
    expect(getQuestion('emailConsent')).toEqual(questions[6])
  })

  test('Moving to the previous question works as expected', async () => {
    const {result} = renderHook(() => useQuizContext(), {wrapper})
    const {submitQuestion, question} = result.current

    expect(question).toEqual('name')
    act(() => submitQuestion('Adam'))

    const firstNewState = result.current
    expect(firstNewState.progress).toEqual(20)
    expect(firstNewState.question).toEqual('email')
    expect(firstNewState.answers).toEqual({
      name: 'Adam'
    })

    // check that new answers are added to the answers state

    act(() => firstNewState.submitQuestion('adam@me.com'))

    const secondNewState = result.current
    expect(secondNewState.progress).toEqual(40)
    expect(secondNewState.question).toEqual('sport')
    expect(secondNewState.answers).toEqual({
      name: 'Adam',
      email: 'adam@me.com'
    })

    // check that as we move back, old answers are deleted from answers object
    // -> this ensures the 'progress' percentage updates as we move backwards

    act(() => secondNewState.prevQuestion())

    const thirdNewState = result.current
    expect(thirdNewState.progress).toEqual(40)
    expect(thirdNewState.question).toEqual('email')

    act(() => thirdNewState.prevQuestion())

    const fourthNewState = result.current
    expect(fourthNewState.progress).toEqual(20)
    expect(fourthNewState.question).toEqual('name')
    expect(fourthNewState.answers).toEqual({
      name: 'Adam'
    })
  })

  test('Completion set to true when progress hits 100%', () => {
    const {result} = renderHook(() => useQuizContext(), {wrapper})

    const answers = [
      'Adam Collins',
      'adam@me.com',
      'Football',
      'Aston Villa',
      'Yes'
    ]

    // quick loop to answer all questions without typing it all out
    answers.forEach(answer => {
      act(() => result.current.submitQuestion(answer))
      const expectedPercentage = (Object.keys(result.current.answers).length / answers.length) * 100
      expect(result.current.progress).toEqual(expectedPercentage)
    })

    expect(result.current.complete).toEqual(true)
  })
})
