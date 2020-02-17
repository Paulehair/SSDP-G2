import React, { useState, useEffect, useContext } from 'react'
import styled, { withTheme } from 'styled-components'
import { useTheme } from './context/ThemeContext'
import { color } from './data/theme'
import './App.css'
import './index.css'
import styled, { ThemeProvider } from 'styled-components'
import API from './utils/API'
import Header from './elements/Header'
import Sidebar from './elements/Sidebar'
import Planning from './elements/Planning'

const variables = {
  black: '#241F1F',
  opBlack: 'rgba(0, 0, 0, 0.35)',
  white: '#FFFFFF',
  grey: '#F3F3F3',
  red: 'linear-gradient(180deg, #C63D2B 0%, #DE5543 100%)'
}

const colorData = {
  z75: {
    primary: '#FF0000',
    secondary: '#FF0'
  },
  z92: {
    primary: '#FF0',
    secondary: '#FF0000',
  }
}

const theme = {
  zone: 75,
  black: '#000',
  white: '#FFF',
  primary: '#FF0000',
  secondary: '#FF0'
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
  const [themeState, setThemeState] = useState(theme.z75)
  const themeToggle = useTheme()
  
  const toggleTheme = (zone) => {
    if(theme.zone === zone) {
      return
    }
    const {primary, secondary} = colorData[`z${zone}`]
    setThemeState(data => {
      return {
        ...data,
        zone,
        primary,
        secondary
      }
    })
  }

  useEffect(_ => {
    ;(async function getPlanning() {
      const response = await API.getPlanning('Paris')
      localStorage.setItem('current', 'Paris')
      setPlanning(response.data.data.planning)
    })()
  }, [])

  const handleClick = async event => {
    event.persist()
    const response = await API.getPlanning(event.target.value)
    localStorage.setItem('current', event.target.value)
    setPlanning(response.data.data.planning)
  }

  const download = () => {
    let current = localStorage.getItem('current')
    window.open(
      `http://localhost:9000/api/exportPlanning/${current.replace('/', '')}`
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <App>
        <Header />
        <div className='wrapper --button'>
          <button className='download' onClick={download}>
            Télécharger le planning
          </button>
        </div>
        <div className='wrapper --main'>
          {zones && <Sidebar onClick={handleClick} zones={zones} />}
          {planning && <Planning planning={planning} />}
        </div>
      </App>
    </ThemeProvider>
  )
}
