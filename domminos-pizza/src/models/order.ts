import type { Pizza } from '@/gql/graphql'
import type { OrderDetails } from './order-details'
export interface Order {
    id: string
    pizzas: Pizza[]
    details: OrderDetails
}
export type NewOrder = Omit<Order, 'id'>
