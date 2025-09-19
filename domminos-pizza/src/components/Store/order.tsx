import type { Order } from '@/gql/graphql'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: Order[] = []

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.push(action.payload);
    },
    setOrders: (state, action: PayloadAction<Order[]>) => {
      return action.payload;
    },
  },
})
export const { addOrder, setOrders } = orderSlice.actions
