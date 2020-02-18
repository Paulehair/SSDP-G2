import React from 'react'
import styled from 'styled-components'
import PrimaryText from './../atoms/PrimaryText'
import SecondaryText from './../atoms/SecondaryText'
import Input from './../atoms/Input'
import data from '../data/data'

const Area = styled.div`
  div {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  .areaTitle {
    margin-bottom: 10px;
  }
`

export default ({ zones, onChange }) => {
  const inputData = {
    ...data.input.zone,
    onChange,
    placeholder: data.input.zone.name,
    value: data.input.zone.name
  }

  return (
    <Area>
      <div className='areaTitle'>
        <PrimaryText text='Secteurs' />
      </div>
      {zones.map((zone, i) => (
        <div key={i}>
          <Input data={{...inputData, value: zone.code, checked: zone.active}} />
          <SecondaryText text={`Secteur du ${zone.code}`} black={true} />
        </div>
      ))}
    </Area>
  )
}
