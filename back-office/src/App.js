import React, { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import styled, { ThemeProvider } from 'styled-components'
import API from './utils/API'
import Header from './elements/Header'
import Sidebar from './elements/Sidebar'
import Planning from './elements/Planning'

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

const zonesStart = [
  {
    code: 'Paris',
    active: true
  },
  {
    code: '92/94',
    active: false
  },
  {
    code: '93',
    active: false
  },
  {
    code: '77/91',
    active: false
  },
  {
    code: '78/95',
    active: false
  }
]

export default () => {
  const [planning, setPlanning] = useState(null)
  const [zones, setZones] = useState(zonesStart)

  useEffect(_ => {
    ;(async function getPlanning() {
      const response = await API.getPlanning('Paris')
      setPlanning(response.data.data.planning)
    })()
  }, [])

  const handleClick = async event => {
    const response = await API.getPlanning(event.target.value)
    setPlanning(response.data.data.planning)
  }

  return (
    <ThemeProvider theme={theme}>
      <App>
        <Header />
        <div className='wrapper --main'>
          {zones && <Sidebar onClick={handleClick} zones={zones} />}
          {planning && <Planning planning={planning} />}
        </div>
      </App>
    </ThemeProvider>
  )
}
