import React from 'react'

import { ITitle } from '../../types'

export const Title = ({
  title,
  subtitle
}: ITitle) => (
  <>
    <h2 className="text-grey-1000 text-3xl md:text-5xl font-semibold leading-tight">{title}</h2>
    {subtitle && (
      <div className="mt-4">
        <h3 className="text-lg md:text-xl text-grey-800">{subtitle}</h3>
      </div>
    )}
  </>
)
