import React from 'react'
import { render, screen } from '@testing-library/react'

import { BackButton } from '..'

const mockFnc = jest.fn()

jest.mock('../../../hooks', () => ({
  useQuizContext: () => ({
    prevQuestion: mockFnc
  })
}))

describe('BackButton:', () => {
  test('Back function is fired onClick', () => {
    render(<BackButton />)

    screen.getByRole('button').click()

    expect(mockFnc).toBeCalled()
    expect(mockFnc).toBeCalledTimes(1)
  })
})
