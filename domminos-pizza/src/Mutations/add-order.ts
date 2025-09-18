import { gql, useMutation } from 'urql'

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
export const useAddOrderMutation = () => {
    const [, executeMutation] = useMutation(addOrderMutation)
    return { addOrder: executeMutation }
}
