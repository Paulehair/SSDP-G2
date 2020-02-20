import React from "react";
import PrimaryText from "../atoms/PrimaryText";
import Icon from "../atoms/Icon";
import styled from "styled-components";

const Button = styled.button`
	display: flex;
	background-color: ${({backgroundColor}) =>
		backgroundColor ? backgroundColor : 'white'}; /* Green */
	border: none;
	padding: 12px;
	text-align: center;
	text-decoration: none;
	border-radius: 8px;
	color: white;
	display: flex;
	outline: none;
	justify-content: center;
	cursor: pointer;
	align-items: center;
	width: ${({width}) => `${width}%`};
	p {
		margin-right: ${({type}) => (type ? 8 : null)};
	}
`

export default ({color, fontWeight, text, type, backgroundColor, width}) => {
	return (
		<Button backgroundColor={backgroundColor} width={width}>
			<PrimaryText
				backgroundColor={backgroundColor}
				textColor={backgroundColor === '#006CB1' ? 'white' : 'black'}
				fontWeight={fontWeight}
				color={color}
				text={text}
			/>
			{type && <Icon type={type} />}
		</Button>
	)
}
