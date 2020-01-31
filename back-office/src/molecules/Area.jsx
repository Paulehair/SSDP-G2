import React from 'react'
import styled from 'styled-components'
import PrimaryText from './../atoms/PrimaryText'
import SecondaryText from './../atoms/SecondaryText'
import Input from './../atoms/Input'

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

export default ({ zones, onClick }) => {
  return (
    <Area>
      <div className='areaTitle'>
        <PrimaryText text='Secteurs' />
      </div>
      {zones.map((zone, i) => (
        <div key={i}>
          <Input
            name='zone'
            onClick={onClick}
            checked={zone.active}
            type='radio'
            value={zone.code}
          />
          <SecondaryText text={`Secteur du ${zone.code}`} black={true} />
        </div>
      ))}
    </Area>
  )
}
