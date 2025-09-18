import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// Data store
const pizzas = [
    {
        id: '1',
        name: 'Margherita',
        price: 5,
        description: 'The classic pizza',
        pictureUrl: '/pizzas/pizza-margherita.png',
    },
    {
        id: '2',
        name: 'Pepperoni',
        price: 7,
        description: 'The classic pizza with added pepperoni',
        pictureUrl: '/pizzas/pizza-pepperoni.png',
    },
    {
        id: '3',
        name: 'Vegetariana',
        price: 7,
        description:
            'Tomato sauce, mozzarella, mushrooms, pepper, onion, fresh spinach and fresh tomato.',
        pictureUrl: '/pizzas/pizza-vegetariana.png',
    },
    {
        id: '4',
        name: 'Hawaiian',
        price: 8,
        description: 'The pizza that makes Italians shake their heads',
        pictureUrl: '/pizzas/pizza-hawaii.png',
    },
]

type Pizza = (typeof pizzas)[0]

interface OrderDetails {
    address: string
    name: string
    phone: string
}

interface Order {
    id: string
    details: OrderDetails
    pizzas: Pizza[]
}

const orders: Order[] = []

// Schema
const typeDefs = `#graphql
    type Pizza {
        id: ID!
        name: String!
        price: Float!
        description: String!
        pictureUrl: String!
    }
    
    type OrderDetails {
        address: String!
        name: String!
        phone: String!
    }
    
    type Order {
        id: ID!
        details: OrderDetails!
        pizzas: [Pizza!]!
    }

    type Query {
        pizzas: [Pizza]
        orders: [Order]
    }

    type Mutation {
        addOrder(address: String!, name: String!, phone: String!, pizzaIds: [ID!]!): Order!
    }
`

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: {
            pizzas: async () => {
                await new Promise((resolve) => setTimeout(resolve, 2000))
                return pizzas
            },
            orders: () => orders,
        },
        Mutation: {
            addOrder: (
                _,
                {
                    address,
                    name,
                    phone,
                    pizzaIds,
                }: {
                    address: string
                    name: string
                    phone: string
                    pizzaIds: string[]
                }
            ) => {
                const newOrder: Order = {
                    id: (orders.length + 1).toString(),
                    details: {
                        address,
                        name,
                        phone,
                    },
                    pizzas: pizzaIds
                        .map((id) => pizzas.find((pizza) => pizza.id === id))
                        .filter((pizza) => pizza !== undefined),
                }
                orders.push(newOrder)
                return newOrder
            },
        },
    },
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
})

console.log(`🚀  Server ready at: ${url}`)
