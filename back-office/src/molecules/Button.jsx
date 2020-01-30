import React from 'react'
import PrimaryText from '../atoms/PrimaryText'
import Icon from '../atoms/Icon'
import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  background-color: #006CB1; /* Green */
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
  div {
      color: white;
  }
`

export default () => {
    return (
        <Button>
            <PrimaryText fontWeight={'500'} color={'white'} text={'Visite d\'urgence'} />
            <Icon type='calplus' />
        </Button>
    )
}