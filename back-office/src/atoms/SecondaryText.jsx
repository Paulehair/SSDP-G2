import React from 'react';
import styled from "styled-components"

const SecondaryText = styled.section`
    color: ${({ textColor }) => textColor ? textColor : 'black'};
    font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : '400'};
    font-size: 14;
    letter-spacing: 0.15px;
`

export default ({value}) => {
    return <SecondaryText>{value}</SecondaryText>
}