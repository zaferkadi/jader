import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from './App.styled'
import { configureStore } from './State/store'
import Routes from './Routes'

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Routes />
      </Router>
      <GlobalStyle />
    </Provider>
  )
}

export default App
