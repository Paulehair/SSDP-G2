import React from "react";
import styled from "styled-components";

const PrimaryText = styled.p`
  font-weight: ${({fontWeight}) => (fontWeight ? fontWeight : '400')};
  font-size: 16px;
`

export default ({text, fontWeight}) => {
	return (
		<PrimaryText textColor={textColor} fontWeight={fontWeight}>
			{text}
		</PrimaryText>
	)
}
