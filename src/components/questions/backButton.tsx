import React from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'

import { useQuizContext } from '../../hooks'

import { Chevron } from '../../vectors'

export const BackButton: React.FC = ({
  children
}) => {
  const {
    prevQuestion
  } = useQuizContext()

  return (
    <div className="mt-2">
      <button
        data-testid="backButton"
        type="button"
        onClick={prevQuestion}
        className="flex items-center justify-center text-grey-600 focus:outline-none"
      >
        <div>
          <Chevron className="transform rotate-180" height={13} />
        </div>
        <div className="ml-1 text-lg">
          {children}
        </div>
      </button>
      <KeyboardEventHandler
        handleKeys={['left']}
        onKeyEvent={() => {
          prevQuestion()
        }}
      />
    </div>
  )
}
