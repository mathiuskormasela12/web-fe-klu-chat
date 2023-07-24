'use client'
// ========== Chat Room
// import all packages
import React from 'react'

// import all hooks
import { useChat } from '@/hooks'

const ChatRoom: React.FC = () => {
  const { chats, loading } = useChat()

  return (
    <div>
      <h1>Chat Room</h1>
     <ol>
      {loading
        ? <p>Please wait...</p>
        : chats.map(chat => (
          <li key={chat.id}>
            {chat.message}
          </li>
        ))}
     </ol>
    </div>
  )
}

export default ChatRoom
