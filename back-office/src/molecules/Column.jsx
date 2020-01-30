import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

// import Card from './Card'

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


  /* TODO : A ENLEVER QUAND VRAIE CARD IMPLEMENTEE */
  div {
    background: lightgreen;
    min-height: 100px;
    border-radius: 8px;
    margin: 15px;
  }
`
export default () => {

  return (

    <Column>

      <div>
        card 1 👽😈
      </div>

      <div>
        card 2 👽😈
      </div>

      <div>
        card 3 👽😈
      </div>

      <div>
        card 1 👽😈
      </div>

      <div>
        card 2 👽😈
      </div>

      <div>
        card 3 👽😈
      </div>

    </Column>

  )
}