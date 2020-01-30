import React from 'react';
import styled from "styled-components"
import PrimaryText from '../atoms/PrimaryText';

const LogoutStyle = styled.section`

`

export default function Logout() {
    return (
        <LogoutStyle>
           <PrimaryText fontWeight={'500'} color={'#FF5A5F'} value={'Déconnexion'} />
        </LogoutStyle>
    );
}
