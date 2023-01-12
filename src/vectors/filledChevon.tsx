import React from 'react'

import { ISVG } from '../types'

export const FilledChevron = ({
  width = 15,
  height = 15,
  className = '',
  fill = 'currentColor'
}: ISVG) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 15 9"
    >
      <g>
        <path
          fill={fill}
          d="M12,3.2l-4.2,4c-0.4,0.4-1,0.4-1.4,0l-4.2-4c-0.4-0.4-0.4-1,0-1.4c0.2-0.2,0.5-0.3,0.7-0.3h8.5c0.6,0,1,0.4,1,1
          C12.3,2.8,12.2,3,12,3.2z"
        />
      </g>
    </svg>
  )
}
