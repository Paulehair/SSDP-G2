import React from 'react'
import styled from 'styled-components'

import Title from '../atoms/Title'

const ModalHead = styled.div`
  width: 100%;
  height: 100%;
  max-height: 70px;
  margin: 0 0 40px 0;
`

export default () => {

  return (

    <ModalHead>

      <Title title={"Formule 1 Montreuil"} />

    </ModalHead>
  )
}
