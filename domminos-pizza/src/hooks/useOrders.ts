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
    const [result, executeQuery] = useQuery<{ orders: Query['orders'] }>({
        query: ordersQuery,
    })

    const refetch = () => {
        executeQuery({ requestPolicy: 'network-only' })
    }

    return { orders: result.data?.orders, refetch, fetching: result.fetching }
}
