import React, { useState } from 'react'
import styled from 'styled-components'

const Icon = styled.i`
    font-family: "fontello";
    font-size: 18px;
    align-self: center;
`

const icons = [
    {
        name: 'logout',
        classIcon: 'icon-logout',
        code: '&#xe800;'
    },
    {
        name: 'trash',
        classIcon: 'icon-trash',
        code: '&#xe801;'
    },
    {
        name: 'cancel',
        classIcon: 'icon-cancel',
        code: '&#xe802;'
    },
    {
        name: 'bell',
        classIcon: 'icon-bell',
        code: '&#xe803;'
    },
    {
        name: 'search',
        classIcon: 'icon-search',
        code: '&#xe804;'
    },
    {
        name: 'calplus',
        classIcon: 'icon-calendarplus',
        code: '&#xf271;'
    },
    {
        name: 'caltimes',
        classIcon: 'icon-calendartimes',
        code: '&#xf273;'
    }
]

export default ({ type }) => {
    const { classIcon } = icons.find(icon => icon.name === type)

    return (
        <Icon className={`demo-icon ${classIcon}`}></Icon>
    )
}