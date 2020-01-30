import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

// import vars from '../../global/variables.scss'


const Arrow = styled.div`
  width: 29px;
  height: 29px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  

`

export default ({ direction }) => {


  return (

    <Arrow>

      <div></div>

    </Arrow>

  )
}