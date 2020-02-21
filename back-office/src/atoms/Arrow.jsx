import React from 'react'
import styled from 'styled-components'

import ArrowAsset from '../assets/arrow.svg'

const Arrow = styled.div`
  width: 30px;
  height: 30px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  background: url('${ArrowAsset}') no-repeat;
  background-position: calc(50% - 1px) 50%;
  position: absolute;
  top: calc( 50% - 15px);
  border-radius: 8px;
  right: ${({direction}) => direction === 'right' && 0};
  cursor: pointer;
  transform: ${({direction}) =>
		direction === 'left' ? null : 'rotate(180deg)'};
`

export default ({direction}) => {
	return <Arrow direction={direction}></Arrow>
}
