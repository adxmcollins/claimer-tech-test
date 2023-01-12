import React from 'react'
import { render, screen } from '@testing-library/react'

import { Buttons } from '..'

describe('Buttons:', () => {
  test('Submit button should be hidden (multiple choice question)', () => {
    render(<Buttons isMultipleChoice={true} isFirstQuestion={false} />)
    expect(() => screen.getByTestId('submitButton')).toThrowError()
  })

  test('Submit button should be visible (multiple choice question)', () => {
    render(<Buttons isMultipleChoice={false} isFirstQuestion={false} />)
    expect(() => screen.getByTestId('submitButton')).not.toThrowError()
  })

  test('Back button should be hidden (on first question)', () => {
    render(<Buttons isMultipleChoice={false} isFirstQuestion={true} />)
    expect(() => screen.getByTestId('backButton')).toThrowError()
  })
})
