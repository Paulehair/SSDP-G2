import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

// import vars from '../../global/variables.scss'


const CustomLink = styled.div`

  a {
    padding: 8px;
    color: black;
    text-decoration: none;
  }

`

export default ({ href, content }) => {


  return (

    <CustomLink>

      <a href={ href }>

        { content }

      </a>

    </CustomLink>

  )
}