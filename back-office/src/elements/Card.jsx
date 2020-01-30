import React from 'react'
import styled from 'styled-components'
import Binome from './../molecules/Binome'
import Details from './../molecules/Details'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${ ({ theme }) => theme.red};
  border-radius: 8px;
  padding: 16px 10px 10px 16px;
  margin: 8px 0 0 0;

  :first-child {
    margin: 15px 0 0 0;
  }

  :last-child {
    margin: 8px 0;
  }
`

const info = {
  hotel: 'Formule 1 Montreuil',
  rooms: '90 chambres',
  hour: '10h30 - 13h',
  initials: ['AA', 'BB']
}

export default () => (
  <Card>
    <Details hotel={info.hotel} rooms={info.rooms} hour={info.hour} />
    <Binome />
  </Card>
)
