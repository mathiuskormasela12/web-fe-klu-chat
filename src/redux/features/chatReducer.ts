// ========== Chat Reducer
// import all packages
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type IChat, type IChatReducerStates } from '@/types'

const initialState: IChatReducerStates = {
  chats: [],
  loading: false
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChats (state, action: PayloadAction<IChat[]>) {
      state.chats = action.payload
    },
    setLoading (state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    }
  }
})

export const { setChats, setLoading } = chatSlice.actions
export default chatSlice.reducer
