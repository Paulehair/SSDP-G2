import React from 'react'
import styled from 'styled-components'

const Vignette = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 1px;
  color: white;
  border-radius: 100%;
  background-color: ${({ primary }) => (primary ? '#D3B5B5' : '#BEBEDC')};
  position: absolute;
  right: ${({ primary }) => (primary ? 'auto' : '0')};
`

export default ({ initials, primary }) => (
  <Vignette primary={primary}>{initials}</Vignette>
)
