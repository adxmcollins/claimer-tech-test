import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './components'

import { QuizProvider } from './context'

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
