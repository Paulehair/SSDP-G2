import React from 'react'
import styled from 'styled-components'

import ArrowAsset from '../assets/arrow.svg'


const Arrow = styled.div`
  width: 30px;
  height: 30px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  background: url('${ ArrowAsset }') no-repeat;
  background-position: calc(50% - 1px) 50%;
  position: absolute;
  top: calc( 50% - 15px);
  border-radius: 8px;
  cursor: pointer;

  &:first-child {
    left: 0;
  }

  &:last-child {
    right: 0;
    transform: rotate(180deg);
  }
`

export default ({ direction }) => {
  return (
    <Arrow>
    </Arrow>
  )
}
