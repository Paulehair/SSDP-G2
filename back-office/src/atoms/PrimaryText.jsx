import React from 'react'
import styled from 'styled-components'

const PrimaryText = styled.p`
  color: ${({ textColor }) => (textColor ? textColor : 'black')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
  font-size: 16px;
`

export default ({ text, color, fontWeight, isSelected }) => {
  return (
    <PrimaryText textColor={color} fontWeight={fontWeight}>
      {text}
    </PrimaryText>
  )
}
