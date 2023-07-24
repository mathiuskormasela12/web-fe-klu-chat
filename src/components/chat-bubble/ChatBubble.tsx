'use client'
// ========= Chat Bubble
// import all packages
import React, { type PropsWithChildren } from 'react'
import styled from 'styled-components'
import { Colors } from '@/themes'
import { validateUrl } from '@/helpers/isUrl'

export const ChatBubble: React.FC<PropsWithChildren> = ({ children }) => {
  const isUrl = validateUrl(children as string)
  return (
    <StyledChatBubble>
      {isUrl ? <Link href={children?.toString()} target="_blank">{children}</Link> : <Text>{children}</Text>}
    </StyledChatBubble>
  )
}

const Text = styled.p`
  color: ${Colors.light};
  font-size: 1rem;
`

const Link = styled.a`
  color: ${Colors.light};
  font-size: 1rem;
  text-decoration: underline;
`

const StyledChatBubble = styled.div`
  background-color: ${Colors.primary};
  padding: .7em 1.5em .7em .8em;
  border-radius: .3rem;
  min-width: 4rem;
  cursor: pointer;
  margin-bottom: 1rem;
`
