import React from 'react'
import styled from 'styled-components'

const SecondaryText = styled.p`
	margin-bottom: 0;
	color: ${({black, theme}) => (black ? theme.black : theme.white)};
	font-weight: ${({fontWeight}) => (fontWeight ? fontWeight : '400')};
	font-size: 14px;
	letter-spacing: 0.15px;
`

export default ({text, black}) => {
	return <SecondaryText black={black}>{text}</SecondaryText>
}
