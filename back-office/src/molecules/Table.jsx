import React from 'react'
import styled from 'styled-components'
import Column from './Column'

const Table = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 0;
  width: 100%;
  height: 100%;
  max-width: 1115px;
  margin: 0 auto;
  overflow-y: scroll;
`
export default ({ planning }) => {
  return (
    <Table>
      {planning.map((day, i) => (
        <Column key={i} visits={day} />
      ))}
      <Column visits={null} />
    </Table>
  )
}
