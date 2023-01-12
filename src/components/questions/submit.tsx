import React from 'react'

import { Chevron } from '../../vectors'

export const Submit: React.FC = ({
  children
}) => (
  <button
    data-testid="submitButton"
    className="bg-blue-600 hover:bg-blue-300 text-white rounded-md px-8 py-3 flex items-center justify-center focus:outline-none"
    type="submit"
  >
    <div className="font-semibold text-xl">
      {children}
    </div>
    <div className="ml-2">
      <Chevron />
    </div>
  </button>
)
