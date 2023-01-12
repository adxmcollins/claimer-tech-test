import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { useQuizContext } from '../../hooks'

import { IQuestion } from '../../types'

import Sport from '../../images/football.png'

import { TitleSection } from '.'
import { QuizForm, Results } from '..'

export const QuestionWrapper: React.FC = () => {
  const {question, answers, submitQuestion, getQuestion, progress, complete, isFirstQuestion} = useQuizContext()
  const {image, displayName} = getQuestion(question) as IQuestion

  const questionVariants = {
    initial: {
      opacity: 0,
      y: 300
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .5,
        delay: isFirstQuestion ? 0 : .25
      }
    },
    exit: {
      opacity: 0,
      y: -600,
      transition: {
        duration: .6
      }
    }
  }

  const imageVariants = {
    initial: {
      opacity: 0,
      width: '115%',
      x: isFirstQuestion ? '-12%' : '-20%'
    },
    enter: {
      opacity: 1,
      width: isFirstQuestion ? '115%' : '100%',
      x: isFirstQuestion ? '-12%' : '0%',
      y: isFirstQuestion ? '0%' : '10%',
      transition: {
        duration: .3,
        delay: isFirstQuestion ? 0 : .2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: .3
      }
    }
  }

  return (
    <div className="px-4 max-w-screen-md lg:max-w-screen-xl mx-auto py-12 md:py-24">
      <div className="flex -mx-2">
        <div className="w-full lg:w-1/2 ml-2 mr-2 lg:mr-8 relative">
          <AnimatePresence>
            <motion.div
              variants={questionVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`${question}-${complete.toString()}`}
              className="w-full absolute"
            >
              <TitleSection progress={progress} />
              <div className="mt-6">
                {complete ? (
                  <Results />
                ) : (
                  <QuizForm
                    key={question}
                    question={question}
                    answers={answers}
                    submitQuestion={submitQuestion}
                    getQuestion={getQuestion}
                    isFirstQuestion={isFirstQuestion}
                  />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="hidden lg:block w-1/2 mx-2 -mt-2 relative">
          <AnimatePresence>
            <motion.div
              variants={imageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`${image}-${complete.toString()}`}
              className="w-full absolute image-animation"
            >
              <img
                src={complete ? Sport : image}
                alt={displayName}
                data-testid="image"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
