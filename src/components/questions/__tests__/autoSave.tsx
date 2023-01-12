import React from 'react'
import { render } from '@testing-library/react'

import { AutoSave } from '..'

jest.mock('formik', () => ({
  useFormikContext: () => ({
    values: {
      name: 'Adam'
    },
    initialValues: {
      name: ''
    }
  })
}))

describe('AutoSave:', () => {
  test('UseEffect fires when form value changes', () => {
    const fnc = jest.fn()
    render(<AutoSave submitForm={fnc} />)

    expect(fnc).toBeCalled()
    expect(fnc).toBeCalledTimes(1)
  })
})
