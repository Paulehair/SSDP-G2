import React from 'react'
import Button from './Button'
import styled from 'styled-components'
import Icon from '../atoms/Icon'

const Settings = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  i {
    margin: 0px 0px 0px 12px;
  }
`

export default () => {
    return (
        <Settings>
            <Button />
            <Icon type='bell' />
            <Icon type='logout' />
        </Settings>
    )
}