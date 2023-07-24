// ========== Use Chat Types
// import all types
import { type IChat } from '.'

export type UseChat = () => ({
  chats: IChat[]
  handleSetChat: () => void
  loading: boolean
})
