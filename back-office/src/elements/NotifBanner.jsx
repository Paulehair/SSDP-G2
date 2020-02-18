import React from 'react'
import styled from 'styled-components'

import PrimaryText from '../atoms/PrimaryText'
import SecondaryText from '../atoms/SecondaryText'
import { variables } from './../data/theme'

const NotifBanner = styled.section`
  width: 100%;
  height: 100%;
  max-height: 96px;
  position: absolute;
  bottom: 0;
  background: ${ variables.purple};
  border-radius: 8px;
`

export default ({ data }) => {

  return (
    <NotifBanner>



    </NotifBanner>
  )

}