import { CreateQuiz } from '..'
import { questions } from '../../data'

describe('Quiz factory', () => {
  const {getQuestion, setCurrentQuestion} = CreateQuiz(questions)

  test('Quiz creation fails when questions array is empty', () => {
    expect(() => CreateQuiz([])).toThrowError('You must pass an array of questions')
  })

  test('Progress starts at zero', () => {
    const currentQuestion = setCurrentQuestion('name')
    expect(currentQuestion.getProgress(0)).toEqual(0)
  })

  test('Name: Next and prev questions chosen correctly', () => {
    const currentQuestion = setCurrentQuestion('name')

    const expectedNextQuestion = getQuestion('email')
    expect(currentQuestion.getNext()).toEqual(expectedNextQuestion)

    const expectedPrevQuestion = null
    expect(currentQuestion.getPrev()).toEqual(expectedPrevQuestion)
  })

  test('Email: Next and prev questions chosen correctly', () => {
    const currentQuestion = setCurrentQuestion('email')

    expect(Math.round(currentQuestion.getProgress(1))).toEqual(20)

    const expectedNextQuestion = getQuestion('sport')
    expect(currentQuestion.getNext()).toEqual(expectedNextQuestion)

    const expectedPrevQuestion = getQuestion('name')
    expect(currentQuestion.getPrev()).toEqual(expectedPrevQuestion)
  })

  test('Sport: Next and prev question is correctly chosen based on selected value', () => {
    const currentQuestion = setCurrentQuestion('sport')

    expect(Math.round(currentQuestion.getProgress(2))).toEqual(40)

    const expectedNextQuestionFootball = getQuestion('footballTeam')
    expect(currentQuestion.getNext('Football')).toEqual(expectedNextQuestionFootball)

    const expectedNextQuestionTennis = getQuestion('tennisPlayer')
    expect(currentQuestion.getNext('Tennis')).toEqual(expectedNextQuestionTennis)

    const expectedNextQuestionFormulaOne = getQuestion('formulaOneTrack')
    expect(currentQuestion.getNext('Formula One')).toEqual(expectedNextQuestionFormulaOne)

    const expectedPrevQuestion = getQuestion('email')
    expect(currentQuestion.getPrev()).toEqual(expectedPrevQuestion)
  })

  test('Football Team: Next and prev questions chosen correctly', () => {
    const currentQuestion = setCurrentQuestion('footballTeam')

    expect(Math.round(currentQuestion.getProgress(3))).toEqual(60)

    const expectedNextQuestion = getQuestion('emailConsent')
    expect(currentQuestion.getNext()).toEqual(expectedNextQuestion)

    const expectedPrevQuestion = getQuestion('sport')
    expect(currentQuestion.getPrev()).toEqual(expectedPrevQuestion)
  })

  test('Tennis Player: Next and prev questions chosen correctly', () => {
    const currentQuestion = setCurrentQuestion('tennisPlayer')

    expect(Math.round(currentQuestion.getProgress(3))).toEqual(60)

    const expectedNextQuestion = getQuestion('emailConsent')
    expect(currentQuestion.getNext()).toEqual(expectedNextQuestion)

    const expectedPrevQuestion = getQuestion('sport')
    expect(currentQuestion.getPrev()).toEqual(expectedPrevQuestion)
  })

  test('Formula One Track: Next and prev questions chosen correctly', () => {
    const currentQuestion = setCurrentQuestion('formulaOneTrack')

    expect(Math.round(currentQuestion.getProgress(3))).toEqual(60)

    const expectedNextQuestion = getQuestion('emailConsent')
    expect(currentQuestion.getNext()).toEqual(expectedNextQuestion)

    const expectedPrevQuestion = getQuestion('sport')
    expect(currentQuestion.getPrev()).toEqual(expectedPrevQuestion)
  })

  test('Email Consent: Next and prev questions chosen correctly', () => {
    const currentQuestion = setCurrentQuestion('emailConsent')

    expect(Math.round(currentQuestion.getProgress(4))).toEqual(80)

    const expectedNextQuestion = null
    expect(currentQuestion.getNext()).toEqual(expectedNextQuestion)

    const expectedPrevQuestionFootball = getQuestion('footballTeam')
    expect(currentQuestion.getPrev({
      footballTeam: 'Villa'
    })).toEqual(expectedPrevQuestionFootball)

    const expectedPrevQuestionTennis = getQuestion('tennisPlayer')
    expect(currentQuestion.getPrev({
      tennisPlayer: 'Murray'
    })).toEqual(expectedPrevQuestionTennis)

    const expectedPrevQuestionFormulaOne = getQuestion('formulaOneTrack')
    expect(currentQuestion.getPrev({
      formulaOneTrack: 'monza'
    })).toEqual(expectedPrevQuestionFormulaOne)
  })
})
