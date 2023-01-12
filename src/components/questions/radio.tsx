import React from 'react'
import { useFormikContext, FormikProps, FormikFormProps } from 'formik'
import cx from 'classnames'

import { IRadio } from '../../types'

import { alphabet } from '../../data'

export const Radio = ({
  name,
  id,
  value,
  label,
  index,
  isSelected
}: IRadio) => {
  const {setFieldValue}: FormikProps<FormikFormProps> = useFormikContext()

  const alphabetClasses = cx(
    'rounded-md bg-white border-2 uppercase w-10 h-10 flex items-center justify-center text-blue-600 text-xl font-semibold',
    {
      'border-blue-600': isSelected,
      'border-grey-500 ': !isSelected
    }
  )

  const labelClasses = cx(
    'ml-5 text-lg',
    {
      'text-blue-600': isSelected,
      'text-grey-1000': !isSelected
    }
  )

  return (
    <>
      <label
        htmlFor={`${id}-${value}`}
        className="absolute inset-0 cursor-pointer"
      />

      <div className="flex items-center">
        <div className={alphabetClasses}>
          {alphabet[index]}
        </div>

        <input
          type="radio"
          name={name}
          id={`${id}-${value}`}
          value={value}
          onChange={e => {
            setFieldValue(name, '')
            setFieldValue(name, e.target.value)
          }}
          onClick={() => {
            setFieldValue(name, '')
            setFieldValue(name, value)
          }}
          checked={isSelected}
          className="hidden"
        />

        <div
          className={labelClasses}
          data-testid={`${id}-${value}`}
        >
          {label}
        </div>
      </div>
    </>
  )
}
