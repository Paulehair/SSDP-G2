import React from 'react'
import styled from 'styled-components'
import PrimaryText from './../atoms/PrimaryText'
import SecondaryText from './../atoms/SecondaryText'
import Input from './../atoms/Input'

const Area = styled.div`
  div {
    display: flex;
    align-items: center;
  }
  .areaTitle {
    margin-bottom: 10px;
  }
`

export default () => (
  <Area>
    <div className='areaTitle'>
      <PrimaryText text='Secteurs' />
    </div>
    <div>
      <Input type='checkbox' value={75} />
      <SecondaryText text='Secteur du 75' black={true} />
    </div>
  </Area>
)
