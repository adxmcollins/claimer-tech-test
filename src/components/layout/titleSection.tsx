import React from 'react'

import { HelpIcon, ProgressIcon, Chevron } from '../../vectors'

export const TitleSection = ({
  progress
}: {
  progress: number;
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center -mt-1">
      <div className="flex items-center">
        <div>
          <ProgressIcon progress={progress} />
        </div>
        <div className="ml-4">
          <div className="flex flex-col justify-center">
            <div>
              <button
                onClick={() => alert('This is a dummy link')}
                className="flex items-center justify-center focus:outline-none"
              >
                <div className="text-base text-blue-300 hover:text-blue-600">
                  Personal profile
                </div>
                <div className="text-grey-400">
                  <Chevron height={13} />
                </div>
              </button>
            </div>
            <h4
              className="text-xl font-semibold text-grey-900 leading-tight tracking-wide"
            >
              Favourite sport quiz
            </h4>
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-0">
        <button
          onClick={() => alert('This is a dummy button')}
          className="flex items-center justify-center px-5 py-3 rounded-md text-white focus:outline-none bg-green-500"
        >
          <span>
            <HelpIcon className="h-6 w-6" />
          </span>
          <span className="ml-2 text-base font-semibold">
            See help
          </span>
        </button>
      </div>
    </div>
  )
}
