import type { Order, OrderDetails } from '@/gql/graphql'
import { gql, useMutation } from 'urql'
// import type { Order } from '@/models/order'
// import type { OrderDetails } from '@/models/order-details'

const addOrderMutation = gql(`
    mutation addOrderMutation (
        $address: String!
        $name: String!
        $phone: String!
        $pizzaIds: [ID!]!
    ) {
        addOrder(
            address: $address
            name: $name
            phone: $phone
            pizzaIds: $pizzaIds
        ) {
            id
            details {
                address 
                name
                phone
            }
            pizzas {
                name
                pictureUrl
                description
                id
                pictureUrl
                price
            }
        }
    }
`)

interface AddOrderMutationData {
    addOrder: Order
}

interface AddOrderMutationVariables extends OrderDetails {
    pizzaIds: string[]
}

export const useAddOrderMutation = () => {
    const [, executeMutation] = useMutation<
        AddOrderMutationData,
        AddOrderMutationVariables
    >(addOrderMutation)
    return { addOrder: executeMutation }
}
