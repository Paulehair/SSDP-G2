import React, { useState, createContext, useContext } from 'react'
import styled, { ThemeProvider } from 'styled-components'

const ThemeToggleContext = createContext()

export const useTheme = () => useContext(ThemeToggleContext)

export const MyThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState({
    area: 'zone75'
  })

  const toggle = () => {
    const area = themeState.area === 'zone75' ? `zone92` : `zone75`
    setThemeState({ area: area })
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
