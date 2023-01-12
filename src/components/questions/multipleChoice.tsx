import React from 'react'
import { useFormikContext, FormikProps, FormikFormProps, FormikValues } from 'formik'
import cx from 'classnames'
import KeyboardEventHandler from 'react-keyboard-event-handler'

import { IMutipleChoice } from '../../types'

import { alphabet } from '../../data'

import { Radio, AutoSave } from '.'

export const MultipleChoice = ({
  name,
  id,
  choices
}: IMutipleChoice) => {
  const {values}: FormikProps<FormikValues> = useFormikContext()
  const {setFieldValue, submitForm}: FormikProps<FormikFormProps> = useFormikContext()
  const thisValue = values[name]

  return (
    <div className="mt-8 pt-1">
      {choices.map((choice, index) => {
        const {label, value} = choice
        const isSelected = thisValue === value

        const boxClasses = cx(
          'multiple-choice w-full relative bg-grey-100 hover:bg-gray-100 rounded-md border p-3',
          {
            'border-blue-600': isSelected,
            'border-grey-500': !isSelected,
            'mt-3': index > 0
          }
        )

        return (
          <div
            key={value}
            className={boxClasses}
          >
            <Radio
              id={id}
              name={name}
              value={value}
              label={label}
              index={index}
              isSelected={isSelected}
            />
          </div>
        )
      })}
      <KeyboardEventHandler
        handleKeys={alphabet.slice(0, choices.length)}
        onKeyEvent={(key: string) => {
          const choiceIndex = alphabet.indexOf(key)
          setFieldValue(name, '')
          setFieldValue(name, choices[choiceIndex].value)
        }}
      />
      <AutoSave
        submitForm={submitForm}
      />
    </div>
  )
}
