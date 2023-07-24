'use client'
// ========== Chat Hook
// import all packages
import { type ChangeEvent, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { type AppDispatch, type RootState } from '@/redux/store'
import { setChats } from '@/redux/features/chatReducer'

// import all types
import { type UseChat } from '@/types'

export const useChat: UseChat = () => {
  const [message, setMessage] = useState<string>('')
  const dispatch = useDispatch <AppDispatch>()
  const chats = useSelector((states: RootState) => states.chatReducer.chats)
  const loading = useSelector((states: RootState) => states.chatReducer.loading)

  const handleSetChat = (): void => {
    dispatch(setChats([
      {
        id: '1',
        message: 'Hi',
        isLink: false
      },
      {
        id: '2',
        message: 'test',
        isLink: false
      }
    ]))
  }

  const handleSendMessage = (): void => {
    dispatch(setChats([
      ...chats,
      {
        id: String(Number(chats[chats.length - 1]?.id ?? 0) + 1),
        message,
        isLink: false
      }
    ]))
    setMessage('')
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.target.value)
  }

  const handleResetChat = (): void => {
    dispatch(setChats([]))
  }

  return {
    chats: [...chats].reverse(),
    handleSetChat,
    loading,
    handleSendMessage,
    message,
    onChange,
    handleResetChat
  }
}
