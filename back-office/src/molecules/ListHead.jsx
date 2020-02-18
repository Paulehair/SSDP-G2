import React from 'react'
import styled from 'styled-components'

import Text from '../atoms/Text'
import SecondaryText from '../atoms/Arrow'

import labels from '../data/labels'

const ListHead = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 10% 30% 20% 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 0;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1115px;
  max-height: 70px;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme: { variables } }) => variables.grey};
`

export default ({ data }) => {

  // const filterLabels = () => {

  //   const requiredLabel = ['Priorité', 'Adresse', 'Capacité', 'Dernière visite', 'Taux d\'Anomalie']

  //   const requiredLabel.filter(item => !labels.includes(item))

  //   console.log(labels)

  // }

  // filterLabels()




  return (
    <ListHead>
      {data && Array.from(Object.keys(data)).map((key, i) => {
        if (labels[key]) {
          return (
            <div key={i}>

              <Text text={labels[key]} />

              <SecondaryText text={data[key]} />

            </div>
          )
        }
      }
      )}
    </ListHead>
  )
}