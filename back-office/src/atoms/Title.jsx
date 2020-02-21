import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  padding: 8px 0;
  /* color: ${({theme: {variables}}) => variables.white}; */
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  grid-column: 1;
  color: white;
`

export default ({title}) => <Title>{title}</Title>
