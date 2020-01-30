import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Card from './../elements/Card'

// import vars from '../../global/variables.scss'

const Column = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-column-gap: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-right: 1px solid grey;
  overflow-y: scroll;

  &:last-child {
    border-right: none;
  }
`
export default () => {
  return (
    <Column>
      <Card />
      <Card />
      <Card />
      <Card />
    </Column>
  )
}
