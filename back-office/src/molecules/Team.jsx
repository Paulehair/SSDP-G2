import React from 'react'
import styled from 'styled-components'

import Vignette from '../atoms/Vignette'
import SecondaryText from '../atoms/SecondaryText'

const Team = styled.div`
  width: 100%;
  height: 100%;

  > div {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 1fr;
    margin: 0 0 20px 0;
    position: relative;

    :first-child {
      margin-top: 20px;
    }

    > div {
      grid-column: 1;
      justify-self: center;
      align-self: center;
      left: 0;
    }

    h4 {
      grid-column: 2;
      align-self: center;
      padding-left: 20px;
    }
  }
`

export default ({ team }) => {
  return (
    <Team>
      {team.map((e, i) => (
        <div key={i}>
          <Vignette
            primary={i % 2 === 0 ? true : false}
            initials={`${e.firstName[0]}${e.lastName[0]}`}
          />
          <SecondaryText text={`${e.firstName} ${e.lastName}`} key={i} />
        </div>
      ))}
    </Team>
  )
}
