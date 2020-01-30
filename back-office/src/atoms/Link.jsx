import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

// import vars from '../../global/variables.scss'

const Link = styled.a`
  padding: 8px;
  color: black;
  text-decoration: none;
`

export default ({ href, children }) => <Link>{children}</Link>
