'use client'
import { Colors } from '@/themes'
// ========= Input
// import all packages
import styled from 'styled-components'

export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1rem;
  border: .9px solid ${Colors.lightOld};
  background-color: ${Colors.white};
  padding: 0 .7rem;
  border-radius: .3rem;
  width: 100%;
  height: 2.8rem;

  &::placeholder {
    color: ${Colors.lightOld};
  }
`
