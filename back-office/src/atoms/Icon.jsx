import React from 'react'
import styled from 'styled-components'
import data from '../data/formData'

const Icon = styled.i`
	font-family: 'fontello';
	font-size: 18px;
	align-self: center;
	font-size: ${({size}) => size + 'px'};
	color: ${({iconColor}) => iconColor};
	cursor: pointer;
`

export default ({type, size, iconColor}) => {
	const icons = data.icons
	const {classIcon} = icons.find(icon => icon.name === type)

	return (
		<Icon
			iconColor={iconColor}
			size={size}
			className={`demo-icon ${classIcon}`}
		></Icon>
	)
}
