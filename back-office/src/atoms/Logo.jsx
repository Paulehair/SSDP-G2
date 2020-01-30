import React from 'react'
import styled from 'styled-components'
import LogoImg from '../assets/Logo.png'

const Logo = styled.div`
  flex: 1;
`

export default () => {
  return (
    <Logo>
      <img alt='logo' src={LogoImg}></img>
    </Logo>
  )
}
