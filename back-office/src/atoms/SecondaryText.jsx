import React from 'react'
import styled from 'styled-components'

const SecondaryText = styled.p`
	margin-bottom: 0;
	font-size: 14px;
	letter-spacing: 0.15px;
`

export default ({text}) => {
	return <SecondaryText>{text}</SecondaryText>
}
