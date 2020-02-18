import React from 'react'
import styled from 'styled-components'

import Title from '../atoms/Title'
import Icon from '../atoms/Icon'

const ModalHead = styled.div`
  
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 80% 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
  max-height: 70px;
  margin: 0 0 40px 0;

`

export default ({ data }) => {
  return (
    <ModalHead>
      <Title title={data.name} />

      <Icon iconColor={({ theme: {variables} }) => variables.white} size={20} type={`calplus`} />
      <Icon iconColor={({ theme: {variables} }) => variables.white} size={20} type={`trash`} />
      <Icon iconColor={({ theme: {variables} }) => variables.white} size={20} type={`cancel`} />


    </ModalHead>
  )
}
