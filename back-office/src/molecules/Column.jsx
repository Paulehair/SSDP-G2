import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Card from './../elements/Card'

const Column = styled.div`
  /* SOLUTION TEMPORAIRE NE PAS EFFACER */
  /* display: grid; */
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-column-gap: 0;
  width: 100%;
  height: 100%;
  /* IDEM MARGIN BOTTOM ICI */
  margin: 0 auto 100px;
  padding: 0 14px;
  border-right: 1px solid ${({ theme }) => theme.grey};

  &:last-child {
    border-right: none;
  }
`
export default ({ visits }) => {
  return (
    <Column>
      {visits !== null &&
        visits.map((visit, i) => <Card key={i} visit={visit} />)}
    </Column>
  )
}
