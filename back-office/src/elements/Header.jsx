import React, { useState, useRef } from 'react';
import styled from "styled-components"
import Nav from '../molecules/Nav';
import Logo from '../atoms/Logo';
import Logout from '../molecules/Logout';

const HeaderStyle = styled.section`
  height: 64px;
  display: flex;
  align-self: center;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  border-bottom: 1px solid #EAEAEA;
  padding: 0 50px;
  .navComponent {
      display: flex;
  }
  .logoutComponent {

  }
`

export default function Header() {
    const [currentNav, setCurrentNav] = useState("Planning")
    const navRef = useRef(null)

    const handleclick = (el) => {
        if (currentNav) {
            setCurrentNav(el)
        }
        console.log(currentNav)
        console.log(navRef)
    }

    return (
        <HeaderStyle>
            <Logo />
            <div className='navComponent'>
                {['Planning', 'Salariés', 'Hôtels'].map((label, i) => {
                    return (
                        <div ref={navRef} key={i} onClick={() => handleclick(label)}>
                            <Nav label={label} />
                        </div>
                    )
                })}
            </div>
            <div className='logoutComponent'>
                <Logout />
            </div>
        </HeaderStyle>
    );
}
