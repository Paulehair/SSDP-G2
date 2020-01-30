import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  align-items: center;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.5);
  background: #e8e8e8;
  opacity: 0.5;
  border: none;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
  &[type='text'] {
    width: 100%;
  }
  &[type='checkbox'] {
    width: 18px;
    height: 18px;
    margin-right: 12px;
  }
`

export default ({ type, placeholder }) => (
  <Input placeholder={placeholder} type={type} />
)
