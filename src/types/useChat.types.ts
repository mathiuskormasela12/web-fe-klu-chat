// ========== Use Chat Types
// import all types
import { type ChangeEvent } from 'react'
import { type IChat } from '.'

export type UseChat = () => ({
  chats: IChat[]
  handleSetChat: () => void
  loading: boolean
  handleSendMessage: () => void
  message: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleResetChat: () => void
})
