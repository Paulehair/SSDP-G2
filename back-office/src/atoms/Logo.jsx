import React from 'react'
import styled from 'styled-components'
import LogoImg from '../assets/Logo.png'

const Logo = styled.div``

export default () => {
  return (
    <Logo>
      <img alt='logo' src={LogoImg}></img>
    </Logo>
  )
}
