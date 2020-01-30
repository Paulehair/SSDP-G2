import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

// import vars from '../../global/variables.scss'

import TableHead from '../molecules/TableHead'
import Table from '../molecules/Table'


const Planning = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1115px;
  background: white;
  border-radius: 8px;
  box-shadow: 1px 2px 5px #000000;
`

export default ({ day, month }) => {



  return (

    <Planning>

      <TableHead />
      <Table />

    </Planning>

  )
}