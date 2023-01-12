import React from 'react'
import cx from 'classnames'

import { Submit, BackButton } from '.'

export const Buttons = ({
  isMultipleChoice,
  isFirstQuestion
}: {
  isMultipleChoice: boolean;
  isFirstQuestion: boolean;
}) => {
  const containerClasses = cx(
    'flex flex-col items-center justify-center',
    {
      'lg:pr-10': !isMultipleChoice,
      'lg:pl-20': isMultipleChoice
    }
  )

  return (
    <div className={containerClasses}>
      {!isMultipleChoice && (
        <Submit>
          Continue
        </Submit>
      )}
      <div className="mt-3">
        {!isFirstQuestion ? (
          <BackButton>
            Back
          </BackButton>
        ) : !isMultipleChoice ? (
          <div className="text-grey-600 text-sm">
            Or press <span className="uppercase">enter</span>
          </div>
        ) : null}
      </div>
    </div>
  )
}
