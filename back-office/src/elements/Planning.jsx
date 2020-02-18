import React from 'react'
import styled from 'styled-components'

import TableHead from '../molecules/TableHead'
import Table from '../molecules/Table'
import NotifBanner from './NotifBanner'

const Planning = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 0 0 15px;
  background: ${({ theme: { variables } }) => variables.white};
  border-radius: 8px;
  overflow: hidden;
`

export default ({ planning }) => {
  return (
    <Planning>
      <TableHead />
      <Table planning={planning} />
      <NotifBanner />
    </Planning>
  )
}
