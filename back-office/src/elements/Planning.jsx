import React from 'react'
import styled from 'styled-components'

import TableHead from '../molecules/TableHead'
import Table from '../molecules/Table'

const Planning = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 0 0 15px;
  background: ${ ({ theme }) => theme.white};
  border-radius: 8px;
  overflow: hidden;
`

export default ({ day, month }) => {
  return (
    <Planning>
      <TableHead />
      <Table />
    </Planning>
  )
}
