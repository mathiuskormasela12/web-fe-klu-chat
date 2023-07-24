'use client'
// ========== Chat Hook
// import all packages
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { type AppDispatch, type RootState } from '@/redux/store'
import { setChats, setLoading } from '@/redux/features/chatReducer'

// import all types
import { type UseChat } from '@/types'

export const useChat: UseChat = () => {
  const dispatch = useDispatch <AppDispatch>()
  const chats = useSelector((states: RootState) => states.chatReducer.chats)
  const loading = useSelector((states: RootState) => states.chatReducer.loading)

  const handleSetChat = (): void => {
    dispatch(setChats([
      {
        id: '10202f02292',
        message: 'Hi',
        isLink: false
      }
    ]))
  }

  useEffect(() => {
    dispatch(setLoading(true))

    setTimeout(() => {
      handleSetChat()
      dispatch(setLoading(false))
    }, 5000)
  }, [])

  return {
    chats,
    handleSetChat,
    loading
  }
}
