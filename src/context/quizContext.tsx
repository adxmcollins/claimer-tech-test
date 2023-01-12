import React, { createContext, useState, useCallback } from 'react'

import { questions } from '../data'

import { IQuizProvider } from '../types'

import { CreateQuiz } from '../factories'

export const QuizContext = createContext({} as IQuizProvider)

const {setCurrentQuestion, getQuestion} = CreateQuiz(questions)

export const QuizProvider: React.FC = ({
  children
}) => {
  const [complete, setComplete] = useState(false)
  const [progress, setProgress] = useState(0)
  const [question, setQuestion] = useState(questions[0].id)
  const [answers, setAnswers] = useState<IQuizProvider['answers']>({})

  const {getPrev, getNext, getProgress} = setCurrentQuestion(question)
  const prev = getPrev(answers)

  const isFirstQuestion = prev === null

  const prevQuestion = useCallback(() => {
    if (prev === null) return

    const newAnswers = {...answers}
    delete newAnswers[question]
    setAnswers(newAnswers)

    const answeredQuestions = Object.keys(newAnswers).length
    const progress = getProgress(answeredQuestions)

    setProgress(progress)

    setQuestion(prev.id)
  }, [prev, answers, question, getProgress])

  const submitQuestion = (answer: string) => {
    let newAnswers = {
      ...answers,
      [question]: answer
    }
    setAnswers(newAnswers)

    const answeredQuestions = Object.keys(newAnswers).length

    const next = getNext(answer)?.id || ''
    const progress = getProgress(answeredQuestions)

    setProgress(progress)

    if (progress === 100) {
      setComplete(true)
    } else {
      setQuestion(next)
    }
  }

  return (
    <QuizContext.Provider value={{
      progress,
      complete,
      answers,
      question,
      isFirstQuestion,
      prevQuestion,
      submitQuestion,
      getQuestion
    }}>
      {children}
    </QuizContext.Provider>
  )
}

export const QuizConsumer = QuizContext.Consumer
