import React from 'react'
import cx from 'classnames'
import { Field } from 'formik'

import { IInput } from '../../types'

export const Input = ({
  name,
  id,
  type,
  hasError,
  placeholder
}: IInput) => {
  const classes = cx(
    'w-full bg-white rounded-md placeholder-grey-300 border-2 focus:outline-none text-xl text-grey-1000 px-3 py-2',
    {
      'border-red-500': hasError,
      'border-grey-500 focus:border-blue-600': !hasError
    }
  )

  return (
    <Field
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      className={classes}
      data-testid={id}
    />
  )
}
