'use client'
// ========== Card
// import all packages
import styled from 'styled-components'
import { Colors } from '@/themes'

export const Card = styled.div`
  border: 1px solid ${Colors.gray};
  height: 35rem;
  border-radius: .7rem;
  width: 35rem;
  height: 35rem;

  @media screen and (max-width: 920px) {
    width: 25rem;
    height: 28rem;
  }
`

export const CardHeader = styled.header`
  height: 15%;
  background-color: ${Colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardHeaderTitle = styled.h3`
  color: ${Colors.dark};
  font-size: 1.5rem;
`

export const CardResetText = styled.p`
  color: ${Colors.danger};
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
`

export const CardMain = styled.div`
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardScroll = styled.div`
  height: 65%;
`

export const CardData = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  justify-content: flex-start;
  overflow-y: scroll;
`

export const CardFooter = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardLeft = styled.div`
  width: 78%;
`

export const CardRight = styled.div`
  width: 20%;
`

export const CardText = styled.p`
  color: ${Colors.dark};
  font-size: 1rem;
`
