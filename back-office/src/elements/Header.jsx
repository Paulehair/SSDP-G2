import React from 'react'
import styled from 'styled-components'
import Nav from '../molecules/Nav'
import Logo from '../atoms/Logo'
import Settings from '../molecules/Settings'

const Header = styled.header`
  background-color: ${({ theme: {variables} }) => variables.white};
  .headerContent {
    height: 64px;
    display: flex;
    align-self: center;
    justify-content: space-between;
    background-color: white;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
    color: ${({ theme: {variables} }) => variables.black};
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
  return (
    <Header >
      <div className='headerContent wrapper'>
        <Logo />
        <Nav nav={nav} />
        <Settings />
      </div>
    </Header>
  )
}
