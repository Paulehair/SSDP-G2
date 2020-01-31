import React from 'react'
import styled from 'styled-components'
import Text from '../atoms/Text'
import Team from '../molecules/Team'
import SecondaryText from '../atoms/SecondaryText'

const ModalBody = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 80px);

  p {
    margin: 0 0 10px 0;
  }

  h4 {
    font-weight: bold;
  }

  .team {
    grid-row: 1 / span 2;
  }

  .sector {
    grid-row: 1;
    grid-column: 2;
  }

  .rate {
    grid-row: 1;
    grid-column: 3;
  }

  .hour {
    grid-row: 2;
    grid-column: 2;
  }

  .rooms {
    grid-row: 2;
    grid-column: 3;
  }
`

export default ({ data }) => {
  return (
    <ModalBody>
      <div className='team'>
        <Text text={'Equipiers'} />

        <Team team={data.team} />
      </div>

      <div className='sector'>
        <Text text={'Secteur'} />

        <SecondaryText text={data.sector} />
      </div>

      <div className='rate'>
        <Text text={"Taux d'anomalie"} />

        <SecondaryText text={`${data.anomaly}%`} />
      </div>

      <div className='hour'>
        <Text text={'Plage Horaire'} />

        <SecondaryText text={'12h30 - 20h'} />
      </div>

      <div className='rooms'>
        <Text text='Chambre à visiter' />

        <SecondaryText text={data.rooms} />
      </div>
    </ModalBody>
  )
}
