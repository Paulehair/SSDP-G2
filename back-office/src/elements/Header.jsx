import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Nav from '../molecules/Nav'
import Logo from '../atoms/Logo'
import Settings from '../molecules/Settings'

const Header = styled.header`
  background-color: ${({ theme }) => theme.white};
  .headerContent {
    height: 64px;
    display: flex;
    align-self: center;
    justify-content: space-between;
    background-color: white;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
    color: ${({ theme }) => theme.black};
    background-color: ${({theme}) => theme.primary};
    &.wrapper {
      padding: 0 40px;
    }
  }
`

const nav = {
  list: ['Planning', 'Salariés', 'Hôtels'],
  logout: 'Se déconnecter'
}

export default () => {
  const [currentNav, setCurrentNav] = useState('Planning')

  const handleclick = el => {
    if (currentNav) {
      setCurrentNav(el)
    }
  }
  
  return (
    <Header >
    <button>toggle theme</button>
      <div className='headerContent wrapper'>
        <Logo />
        <Nav nav={nav} />
        <Settings />
      </div>
    </Header>
  )
}
