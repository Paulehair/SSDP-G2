import React from 'react'
import styled from 'styled-components'

import Date from '../atoms/Date'
import Arrow from '../atoms/Arrow'

// import vars from '../../global/variables.scss'

const TableHead = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 0;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1115px;
  max-height: 70px;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme: { variables } }) => variables.grey};
`

export default () => {
  return (
    <TableHead>
      <Arrow direction={'left'} />
      <Date day={'8'} month={'Juin'} />
      <Date day={'9'} month={'Juin'} />
      <Date day={'10'} month={'Juin'} />
      <Date day={'11'} month={'Juin'} />
      <Date day={'12'} month={'Juin'} />
      <Arrow direction={'right'} />
    </TableHead>
  )
}
