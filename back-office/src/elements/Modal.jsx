import React from 'react'
import styled from 'styled-components'

import ModalHead from '../molecules/ModalHead'
import ModalBody from '../molecules/ModalBody'

import useToggle from '../helpers/openModal'

const Modal = styled.section`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.opBlack};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 666;
  display: grid;

  > div {
    width: 100%;
    max-width: 720px;
    padding: 40px 32px;
    margin: 0 auto;
    justify-self: center;
    align-self: center;
    border-radius: 8px;
    background: ${({ theme }) => theme.red};
  }
`

export default ({ toggle, data }) => {
  const dontClose = e => {
    e.stopPropagation()
  }

  return (
    <Modal onClick={toggle}>
      <div onClick={dontClose}>
        <ModalHead data={data} />

        <ModalBody data={data} />
      </div>
    </Modal>
  )
}
