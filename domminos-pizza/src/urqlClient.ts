import { Client, cacheExchange, fetchExchange } from 'urql'

export const client = new Client({
    url: 'http://localhost:3000/graphql',
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: {
        headers: {
            'Content-Type': 'application/json',
        },
    },
    suspense: true,
})
