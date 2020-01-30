import React from 'react'
import styled from 'styled-components'
import Link from '../atoms/Link'
import PrimaryText from '../atoms/PrimaryText'

const Nav = styled.ul`
  display: flex;
  flex: 1;
  justify-content: center;
  .navBar {
    margin-right: 40px;
  }
`

export default ({ nav: { list, logout } }) => {
  return (
    <Nav>
      {list.map(el => (
        <li className='navBar'>
          <Link>
            <PrimaryText textColor='black' text={el} />
          </Link>
        </li>
      ))}
    </Nav>
  )
}
