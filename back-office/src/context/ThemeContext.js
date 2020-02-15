import React, { useState, createContext, useContext } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { backgroundColor, textColor } from './../data/theme'

const ThemeToggleContext = createContext()

export const useTheme = () => useContext(ThemeToggleContext)

export const MyThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState({
    mode: 'light'
  })

  const toggle = () => {
    const mode = themeState.mode === 'light' ? `dark` : `light`
    setThemeState({ mode: mode })
  }

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode
        }}>
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  )
}

export default ThemeProvider
