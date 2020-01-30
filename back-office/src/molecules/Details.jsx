import React from 'react'
import styled from 'styled-components'
import SecondaryText from './../atoms/SecondaryText'
import Text from './../atoms/Text'

const Div = styled.div`
  p:not(:last-child) {
    margin-bottom: 5px;
  }
`

export default ({ hotel, rooms, hour }) => (
  <Div>
    <SecondaryText black={false} text={hotel} />
    <Text text={rooms} />
    <Text text={hour} />
  </Div>
)
