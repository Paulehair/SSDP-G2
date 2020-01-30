import React from 'react'
import styled from 'styled-components'
import Vignette from './../atoms/Vignette'

const Binome = styled.div`
  display: flex;
  position: relative;
  width: 52px;
  height: 32px;
  margin-left: auto;
`

export default () => {
  const employees = ['AA', 'BB']

  return (
    <Binome>
      {employees.map((e, i) => (
        <Vignette primary={i % 2 === 0 ? true : false} initials={e} key={i} />
      ))}
    </Binome>
  )
}
