import React from 'react'
import styled from 'styled-components'

const PrimaryText = styled.p`
	font-size: 16px;
`

export default ({text}) => {
	return <PrimaryText>{text}</PrimaryText>
}
