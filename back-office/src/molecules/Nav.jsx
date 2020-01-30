import React from 'react'
import styled from 'styled-components'
import Link from '../atoms/Link'
import PrimaryText from '../atoms/PrimaryText'

const Nav = styled.ul`
  display: flex;
  margin-right: 40px;
`

export default ({ nav: { list, logout } }) => {
  return (
    <Nav>
      {list.map(el => (
        <li>
          <Link>
            <PrimaryText text={el} />
          </Link>
        </li>
      ))}
      <li>
        <Link>
          <PrimaryText text={logout} />
        </Link>
      </li>
    </Nav>
  )
}
