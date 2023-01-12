import React from 'react'
import { render } from '@testing-library/react'

import { MultipleChoice } from '..'

jest.mock('formik', () => ({
  useFormikContext: () => ({
    values: {
      sport: 'football'
    },
    setFieldValue: jest.fn(),
    submitForm: jest.fn()
  })
}))

describe('MultipleChoice:', () => {
  test('Check that all choices are rendered', () => {
    const radios = [
      {
        label: 'Football',
        value: 'football'
      },
      {
        label: 'Tennis',
        value: 'tennis'
      },
      {
        label: 'Formula One',
        value: 'formulaOne'
      }
    ]

    const { container } = render(
      <MultipleChoice
        id="sport"
        name="sport"
        choices={radios}
      />
    )

    const choices = container.querySelectorAll('input[type="radio"]')

    choices.forEach((choice, index) => {
      expect(choice).toHaveAttribute('id', `sport-${radios[index].value}`)
      expect(choice).toHaveAttribute('value', `${radios[index].value}`)
    })
  })
})
