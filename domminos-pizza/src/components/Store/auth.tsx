import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface LoggedInUser {
  id: string
  name: string
}
interface AuthState {
  user: LoggedInUser | undefined
}

const initialState: AuthState = {
  user: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoggedInUser>) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = undefined
    },
  },
})
export const { login, logout } = authSlice.actions
