import React, { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import styled, { ThemeProvider } from 'styled-components'
import API from './utils/API'
import Header from './elements/Header'
import Sidebar from './elements/Sidebar'
import Planning from './elements/Planning'
import EmployeList from './elements/EmployeList'

const theme = {
  black: '#241F1F',
  opBlack: 'rgba(0, 0, 0, 0.35)',
  white: '#FFFFFF',
  grey: '#F3F3F3',
  red: 'linear-gradient(180deg, #C63D2B 0%, #DE5543 100%)'
}

const App = styled.main`
  width: 100%;
  margin: 0 auto;
  position: relative;

  .wrapper {
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    padding: 20px;

    /* -64px = hauteur du header */
    &.--main {
      height: calc(100vh - 64px);
    }
  }
`
export default () => {
  const [planning, setPlanning] = useState(null)

  useEffect(_ => {
    ;(async function getPlanning() {
      const response = await API.getPlanning('93')
      setPlanning(response.data.data.planning)
    })()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <App>
        <Header />
        <div className='wrapper --main'>
          {/* <EmployeList /> */}
          <Sidebar />
          {planning && <Planning planning={planning} />}
        </div>
      </App>
    </ThemeProvider>
  )
}
