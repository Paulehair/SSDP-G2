import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  padding: 8px;
  color: ${({ theme: { variables } }) => variables.black};
  text-decoration: none;
`

export default ({ href, children }) => <Link>{children}</Link>
