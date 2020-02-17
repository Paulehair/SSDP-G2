import React, { useState, createContext, useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import {variables} from './../data/theme'

const ThemeToggleContext = createContext()

export const useTheme = () => useContext(ThemeToggleContext)

export const CustomThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState({
    area: 'Paris'
  })

  const toggle = (zone) => {
    if (themeState.area === zone) {
      return
    }
    setThemeState({ area: zone })
  }

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider
        theme={{
          area: themeState.area,
          variables 
        }}>
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  )
}

export default ThemeProvider
