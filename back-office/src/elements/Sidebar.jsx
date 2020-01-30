import React from 'react'
import styled from 'styled-components'

const Sidebar = styled.section`
  width: 28%;
  max-width: 300px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.white};
`

export default () => <Sidebar>SIDEBAR</Sidebar>
