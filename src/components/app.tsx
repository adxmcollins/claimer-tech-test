import React from 'react'

import '../css/index.css'

import { Header, QuestionWrapper } from '.'

export const App = () => {

  return (
    <div>
      <Header />
      <div className="relative z-0">
        <QuestionWrapper />
      </div>
    </div>
  )
}
