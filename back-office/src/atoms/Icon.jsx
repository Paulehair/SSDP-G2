import React from 'react'
import styled from 'styled-components'

const Icon = styled.i`
    font-family: "fontello";
    font-size: 18px;
    align-self: center;
    font-size: ${({ size }) => size + 'px'};
    color:  ${({ iconColor }) => iconColor};
    cursor: pointer;
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

export default ({ type, size, iconColor }) => {
  const { classIcon } = icons.find(icon => icon.name === type)

  return (
    <Icon iconColor={iconColor} size={size} className={`demo-icon ${classIcon}`}></Icon>
  )
}
