import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

// import vars from '../../global/variables.scss'


const Date = styled.div`
  width: 100%;
  align-self: center;
  text-align: center;
  border-right: 1px solid grey;
  display: table;

  &:last-child {
    border-right: none;
  }

  span {
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
    color: black;
  }
`

export default ( { day, month } ) => {



  return (

    <Date>

      <span>{ day } { month }</span>

    </Date>

  )
}