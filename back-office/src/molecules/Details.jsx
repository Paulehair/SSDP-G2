import React from 'react'
import styled from 'styled-components'
import Text from './../atoms/Text'

const Div = styled.div`
  p:not(:last-child) {
    margin-bottom: 5px;
  }
`

export default ({ rooms, hour }) => (
  <Div>
    <Text text={rooms} />
    <Text text={hour} />
  </Div>
)
