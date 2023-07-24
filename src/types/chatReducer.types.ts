// ========== Chat Reducer Types

export interface IChat {
  id: string
  message: string
  isLink: boolean
}

export interface IChatReducerStates {
  chats: IChat[]
  loading: boolean
}
