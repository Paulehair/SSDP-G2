import React from 'react'
import './App.css'
import styled, { ThemeProvider } from 'styled-components'
import Header from './elements/Header'
import Sidebar from './elements/Sidebar'
import Planning from './elements/Planning'

const theme = {
  black: '#241F1F',
  white: '#FFFFFF',
  grey: '#F3F3F3'
}

const App = styled.div`
  width: 100%;
  margin: 0 auto;
  .wrapper {
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    padding: 20px;
  }
`

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <App>
        <Header />
        <div className='wrapper'>
          <Sidebar />
          <Planning />
        </div>
      </App>
    </ThemeProvider>
  )
}
