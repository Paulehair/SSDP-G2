import React from 'react'
import styled from 'styled-components'

// import vars from '../../global/variables.scss'

const Date = styled.div`
  width: 100%;
  height: 100%;
  align-self: center;
  text-align: center;
  border-right: 1px solid grey;
  /* TODO : CENTRER BIEN LES DATES */

  &:nth-last-child(2) {
    border-right: none;
  }

  p {
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
    color: black;
    height: 100%;
  }
`

export default ({ day, month }) => {
  return (

    <Date classname='lol'>

      <p>{ day } { month }</p>

    </Date>
  )
}
