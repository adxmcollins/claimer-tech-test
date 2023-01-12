import React from 'react'

import { IProgressIcon } from '../types'

export const ProgressIcon = ({
  width = 42,
  height = 42,
  className = '',
  progress = 0
}: IProgressIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      width={width}
      height={height}
      className={className}
      data-testid="progressIndicator"
    >
      <g transform="translate(2 2)">
        <path
          fill="none"
          stroke="#E3E3E3"
          strokeWidth="6.5"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          fill="none"
          stroke="#2CBF5E"
          strokeWidth="6.5"
          strokeDasharray={`${Math.round(progress)}, 100`}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </g>
    </svg>
  )
}
