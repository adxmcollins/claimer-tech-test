import React from 'react'
import { render, screen } from '@testing-library/react'
import { Formik } from 'formik'

import { Input } from '..'

describe('Input:', () => {
  test('Check that errors show a red border around the field', () => {
    render(
      <Formik
        initialValues={{
          name: ''
        }}
        onSubmit={() => {
          // do nothing..
        }}
      >
        <Input
          id="name"
          name="name"
          type="text"
          hasError={true}
          placeholder="This is a placeholder"
        />
      </Formik>
    )

    expect(screen.getByTestId('name').classList.contains('border-red-500')).toBe(true)
  })
})
