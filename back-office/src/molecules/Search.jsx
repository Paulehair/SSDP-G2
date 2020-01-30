import React from 'react'
import PrimaryText from './../atoms/PrimaryText'
import Input from './../atoms/Input'
import styled from 'styled-components'

const Search = styled.div``

export default () => (
  <Search>
    <PrimaryText text='Chercher' />
    <Input type='text' placeholder='Une personne, un groupe' />
  </Search>
)
