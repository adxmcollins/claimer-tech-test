import React from 'react'
import { render, screen } from '@testing-library/react'

import { Radio } from '..'

jest.mock('formik', () => ({
  useFormikContext: () => ({
    setFieldValue: jest.fn()
  })
}))

describe('Radio:', () => {
  test('Check that selected text is blue', () => {
    render(
      <Radio
        id="sport"
        name="sport"
        value="football"
        label="Football"
        index={0}
        isSelected={true}
      />
    )

    const testId = 'sport-football'

    expect(screen.getByTestId(testId).classList.contains('text-blue-600')).toBe(true)
  })
})
