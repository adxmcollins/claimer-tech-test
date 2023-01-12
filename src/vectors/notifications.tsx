import React from 'react'

import { ISVG } from '../types'

export const Notifications = ({
  width = 40,
  height = 40,
  className = '',
  fill = 'currentColor'
}: ISVG) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 40 40"
    >
      <path
        fill={fill}
        d="M26.7,31.3h-20c-1.1,0-2-0.9-2-2V17.7C4.7,11.4,9.8,6.3,16,6.3h1.3c6.3,0,11.3,5.1,11.4,11.4v11.6
      C28.7,30.4,27.8,31.3,26.7,31.3z M8.7,27.3h16v-9.6c0-4.1-3.3-7.3-7.4-7.4H16c-4.1,0-7.3,3.3-7.4,7.4V27.3z"
      />
      <path
        fill={fill}
        d="M28.7,31.3h-24c-1.1,0-2-0.9-2-2s0.9-2,2-2h24c1.1,0,2,0.9,2,2S29.8,31.3,28.7,31.3z"
      />
      <path
        fill={fill}
        d="M16.7,36.3c-3.9,0-7-3.1-7-7c0-1.1,0.9-2,2-2s2,0.9,2,2c0,1.7,1.3,3,3,3s3-1.3,3-3c0-1.1,0.9-2,2-2s2,0.9,2,2
      C23.7,33.2,20.6,36.3,16.7,36.3z"
      />
      <path
        fill={fill}
        d="M16.7,10.3c-1.1,0-2-0.9-2-2v-4c0-1.1,0.9-2,2-2s2,0.9,2,2v4C18.7,9.4,17.8,10.3,16.7,10.3z"
      />
    </svg>
  )
}
