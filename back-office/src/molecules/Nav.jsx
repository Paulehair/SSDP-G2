import React from 'react';
import styled from "styled-components"
import PrimaryText from '../atoms/PrimaryText';

const HeaderNavStyle = styled.section`
    margin-right: 40px;
`

export default function Nav({ label, navRef }) {

    return (
        <HeaderNavStyle>
            <PrimaryText color={'black'} fontWeight={'400'} value={label} />
        </HeaderNavStyle>
    )
}