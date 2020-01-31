import React from 'react'
import PrimaryText from '../atoms/PrimaryText'
import Icon from '../atoms/Icon'
import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'white')}; /* Green */
  border: none;
  padding: 12px;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  color: white;
  display: flex;
  outline: none;
  cursor: pointer;
  align-items: center;
  p {
      margin-right: 8px;
  }
`

export default ({ color, fontWeight, text, type, backgroundColor }) => {
    return (
        <Button backgroundColor={backgroundColor}>
            <PrimaryText backgroundColor={backgroundColor} textColor={backgroundColor === '#006CB1' ? 'white' : 'black'} fontWeight={fontWeight} color={color} text={text} />
            {type && <Icon type={type} />}
        </Button>
    )
}