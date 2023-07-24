'use client'
// ========== Chat Room
// import all packages
import React from 'react'

// import all components
import {
  Card,
  CardMain,
  CardFooter,
  Container,
  Hero,
  Input,
  Button,
  CardLeft,
  CardRight,
  ChatBubble,
  CardScroll,
  CardText,
  CardData,
  CardHeader,
  CardHeaderTitle,
  CardResetText
} from '@/components'
import { useChat } from '@/hooks'

const ChatRoom: React.FC = () => {
  const {
    chats,
    loading,
    message,
    onChange,
    handleSendMessage,
    handleResetChat
  } = useChat()

  return (
    <Hero>
      <Card>
        <Container>
          <CardHeader>
            <CardHeaderTitle>
              Group Chat
            </CardHeaderTitle>
            <CardResetText onClick={handleResetChat}>
              Reset Chat
            </CardResetText>
          </CardHeader>

          {loading && (
            <CardMain>
              <CardText>
                Please Wait...
              </CardText>
            </CardMain>
          )}

          {!loading && chats.length === 0 && (
            <CardMain>
              <CardText>
                Empty Chat
              </CardText>
            </CardMain>
          )}

          {(!loading && chats.length > 0) && (
            <CardScroll>
              <CardData>
                {chats.map(chat => (
                  <ChatBubble key={chat.id}>
                    {chat.message}
                  </ChatBubble>
                ))}
              </CardData>
            </CardScroll>
          )}

          <CardFooter>
            <CardLeft>
              <Input
                value={message}
                onChange={onChange}
                placeholder="Type your message here..."
              />
            </CardLeft>
            <CardRight>
              <Button type="button" onClick={handleSendMessage}>Send</Button>
            </CardRight>
          </CardFooter>
        </Container>
      </Card>
    </Hero>
  )
}

export default ChatRoom
