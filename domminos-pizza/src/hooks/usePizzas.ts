import type { Pizza } from '@/gql/graphql'
import { gql, useQuery } from 'urql'

const PIZZAS_QUERY = gql`
    query GetPizzas {
        pizzas {
            id
            name
            price
            description
            pictureUrl
        }
    }
`
interface PizzasQueryData {
    pizzas: Pizza[]
}

export function usePizzas() {
    const [result] = useQuery<PizzasQueryData>({
        query: PIZZAS_QUERY,
    })

    return result
}
