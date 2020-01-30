import React from 'react';
import styled from "styled-components"
import Logo from '../assets/Logo.png'

const HeaderLogoStyle = styled.section`
   
`

export default () => {
    return (
        <HeaderLogoStyle>
            <img alt="logo" src={Logo}></img>
        </HeaderLogoStyle>
    )
}