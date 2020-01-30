import React from 'react'
import styled from 'styled-components'
import Binome from './../molecules/Binome'
import Details from './../molecules/Details'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 196px;
  height: 126px;
  background: #9bb7cd;
  border-radius: 8px;
  padding: 16px 10px 10px 16px;
`

const info = {
  rooms: '90 chambres',
  hour: '10h30 - 13h',
  initials: ['AA', 'BB']
}

export default () => (
  <Card>
    <Details rooms={info.rooms} hour={info.hour} />
    <Binome />
  </Card>
)
