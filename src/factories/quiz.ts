import { IQuiz, IChildParent, ISetQuestionResponse, IQuestion } from '../types'

export const CreateQuiz = (questions: IQuestion[]): IQuiz => {
  if (questions.length === 0) {
    throw Error('You must pass an array of questions')
  }

  const getQuestionIndex = (question: IQuestion) => {
    return questions.map(q => q.id).indexOf(question.id)
  }

  const getQuestion: IQuiz['getQuestion'] = (questionId) => {
    const q = questions.filter(q => q.id === questionId)
    return q[0] || null
  }

  const buildQuestionTree = (
    questions: IChildParent[],
    parentId: IQuestion['id'] = '',
    initialRun = false
  ) => {
    return questions.reduce((result, q) => {
      const conditionalStatement = Array.isArray(q.displayConditions?.questionId) ? q.displayConditions?.questionId.includes(parentId) : q.displayConditions?.questionId === parentId

      if (
        (q.id === parentId && initialRun)
        || (conditionalStatement && !initialRun)
      ) {
        const item = {...q}

        const children = buildQuestionTree(questions, q.id);
        if (children.length) {
          item.children = children
        }

        result.push(item)
      }

      return result;
    }, [] as IChildParent[])
  }

  const dynamicQuestionTree = buildQuestionTree(questions, questions[0].id, true)

  const countTreeDepth = (question: IChildParent) => {
    let depth = 0

    if (question.children) {
      question.children.forEach(x => {
        let temp = countTreeDepth(x)
        if (temp > depth) {
          depth = temp
        }
      })
    }

    return depth + 1
  }

  const setCurrentQuestion: IQuiz['setCurrentQuestion'] = (questionId): ISetQuestionResponse => {
    const currentQuestionId = questionId
    const totalQuestions = countTreeDepth(dynamicQuestionTree[0])
    const currentQuestion = getQuestion(currentQuestionId)
    const currentQuestionIndex = currentQuestion !== null ? getQuestionIndex(currentQuestion) : -1

    const progress: ISetQuestionResponse['getProgress'] = (completed) => (completed / totalQuestions) * 100

    const prevQuestion: ISetQuestionResponse['getPrev'] = (answers = {}) => {
      if ( currentQuestion === null ) return null

      const prevQuestions = questions.slice(0, currentQuestionIndex).reverse()

      const prevQuestion = prevQuestions.filter(question => {
        if (
          (currentQuestion.displayConditions === null && question.displayConditions === null)
          || (currentQuestion.displayConditions !== null && question.displayConditions === null)
        ) {
          return question
        } else if (currentQuestion.displayConditions !== null && question.displayConditions !== null) {
          const conditionalStatement = Array.isArray(currentQuestion.displayConditions.questionId) ? currentQuestion.displayConditions.questionId.includes(question.id) && Object.keys(answers).includes(question.id) : currentQuestion.displayConditions.questionId === question.id

          if (conditionalStatement) {
            return question
          }
        }

        return null
      })

      return prevQuestion[0] || null
    }

    const nextQuestion: ISetQuestionResponse['getNext'] = (selectedAnswer = '') => {
      if ( currentQuestion === null ) return null

      const nextQuestions = questions.slice(currentQuestionIndex + 1)

      const nextQuestion = nextQuestions.filter(question => {
        if (
          (currentQuestion.displayConditions === null && question.displayConditions === null)
          || (currentQuestion.displayConditions !== null && question.displayConditions === null)
        ) {
          return question
        } else if (
          (currentQuestion.displayConditions === null && question.displayConditions !== null)
          || (currentQuestion.displayConditions !== null && question.displayConditions !== null)
        ) {
          const conditionalStatement = Array.isArray(question.displayConditions.questionId) ? question.displayConditions.questionId.includes(currentQuestion.id) : currentQuestion.id === question.displayConditions.questionId

          if (conditionalStatement) {
            if (question.displayConditions.equals === null) {
              return question
            } else {
              return selectedAnswer === question.displayConditions.equals
            }
          }
        }

        return null
      })

      return nextQuestion[0] || null
    }

    return {
      getProgress: progress,
      getPrev: prevQuestion,
      getNext: nextQuestion
    }
  }

  return {
    getQuestion,
    setCurrentQuestion
  }
}
