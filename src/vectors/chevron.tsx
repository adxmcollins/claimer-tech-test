import React from 'react'

import { ISVG } from '../types'

export const Chevron = ({
  width = 23,
  height = 23,
  className = '',
  fill = 'currentColor'
}: ISVG) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 60 100"
  >
    <path
      fill={fill}
      d="M57.4,56.4l-36,36C19.6,94.1,17.3,95,15,95s-4.6-0.9-6.4-2.6c-3.5-3.5-3.5-9.2,0-12.7L38.3,50L8.6,20.4
c-3.5-3.5-3.5-9.2,0-12.7c3.5-3.5,9.2-3.5,12.7,0l36,36C60.9,47.1,60.9,52.9,57.4,56.4z" />
  </svg>
)
