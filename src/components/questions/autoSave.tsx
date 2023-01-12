import { useEffect } from 'react'

import { useFormikContext, FormikProps, FormikValues } from 'formik'

export const AutoSave = ({
  submitForm
}: {
  submitForm: (() => Promise<void>) & (() => Promise<any>)
}) => {
  const {values, initialValues}: FormikProps<FormikValues> = useFormikContext()

  useEffect(() => {
    if (values !== initialValues) {
      submitForm()
    }
  }, [values, initialValues, submitForm])

  return null
}
