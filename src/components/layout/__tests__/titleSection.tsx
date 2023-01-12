import React from 'react'
import { render, screen } from '@testing-library/react'

import { QuizProvider } from '../../../context'

import { TitleSection } from '..'

describe('TitleSection:', () => {
  test('Renders 20% progress correctly', () => {
    render(
      <QuizProvider>
        <TitleSection progress={20} />
      </QuizProvider>
    )

    const progressIndicator = screen.getByTestId('progressIndicator')
    expect(progressIndicator).toHaveAttribute('viewBox')

    const paths = progressIndicator.querySelectorAll('path')
    expect(paths.length).toEqual(2)
    expect(paths[1]).toHaveAttribute('stroke-dasharray', '20, 100')
  })
})
