'use client'
// ========= Button
// import all packages
import styled from 'styled-components'
import { Colors } from '@/themes'

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: ${Colors.primary};
  color: ${Colors.white};
  width: 100%;
  font-size: 1.1rem;
  border-radius: .3rem;
  height: 2.8rem;
  cursor: pointer;
`
