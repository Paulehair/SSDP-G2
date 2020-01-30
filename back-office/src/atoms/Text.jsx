import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  font-size: 13px;
  letter-spacing: 0.1px;
  color: ${ ({ theme }) => theme.white};
  opacity: 0.8;
`

export default ({ text }) => <Text>{text}</Text>
