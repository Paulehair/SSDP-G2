import React from 'react'
import PrimaryText from './../atoms/PrimaryText'
import Input from './../atoms/Input'
import styled from 'styled-components'

const Search = styled.div`
  .searchTitle {
    margin-bottom: 10px;
  }
`

export default (searchIcon) => (
  <Search>
    <div className='searchTitle'>
      <PrimaryText text='Chercher ...' />
    </div>
    <Input type='text' placeholder='Une personne, un groupe' />
  </Search>
)
