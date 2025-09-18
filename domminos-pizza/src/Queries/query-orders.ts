import { gql, useQuery } from 'urql'
import type { Query } from '@/gql/graphql'

const ordersQuery = gql`
    query getOrders {
        orders {
            id
            details {
                address
                name
                phone
            }
            pizzas {
                id
                name
                price
                description
                pictureUrl
            }
        }
    }
`
export const useOrdersQuery = () => {
    const [result] = useQuery<Query['orders']>({
        query: ordersQuery,
    })
    return { orders: result.data }
}
