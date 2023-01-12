import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { IMultiInput, IQuestion, ISingleInput, IQuizForm } from '../../types'

import { Input, Title, Buttons, MultipleChoice } from '.'

const stringRequired = Yup.string().required('Field is required')
const emailRequired = stringRequired.email('Invalid email address')

export const QuizForm = ({
  question,
  answers,
  submitQuestion,
  getQuestion,
  isFirstQuestion
}: IQuizForm) => {
  const {id: questionId, title, subtitle, field} = getQuestion(question) as IQuestion
  const {type, name, id, validation} = field as IQuestion['field'];
  const stringValidation = type === 'email' ? emailRequired : stringRequired
  const isMultipleChoice = type === 'radio'

  return (
    <Formik
      initialValues={{
        [questionId]: answers[questionId] || ''
      }}
      validationSchema={Yup.object({
        [questionId]: validation.regex ? stringValidation.matches( validation.regex, 'Invalid pattern' ) : stringValidation
      })}
      onSubmit={(values) => {
        const answer = values[questionId]
        submitQuestion(answer)
      }}
    >
      {({errors}) => (
        <Form
          className="py-4"
          id={`form-${question}`}
        >
          <Title
            title={title}
            subtitle={subtitle}
          />
          {type === 'text' || type === 'email' ? (
            <div className="mt-8 bg-grey-100 rounded-md border border-grey-500 p-6">
              <Input
                name={name}
                id={id}
                type={type as ISingleInput['type']}
                hasError={errors.hasOwnProperty(name)}
                placeholder={(field as ISingleInput).placeholder}
              />
            </div>
          ) : (
            <MultipleChoice
              name={name}
              id={id}
              choices={(field as IMultiInput).choices}
            />
          )}
          <div className={isMultipleChoice ? 'mt-2' : 'mt-10'}>
            <Buttons
              isFirstQuestion={isFirstQuestion}
              isMultipleChoice={isMultipleChoice}
            />
          </div>
        </Form>
      )}
    </Formik>
  )
}
