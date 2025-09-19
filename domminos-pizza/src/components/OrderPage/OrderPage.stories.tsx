import type { Meta, StoryObj } from '@storybook/react-vite'

import { OrderPage } from './OrderPage'
import { store } from '../Store'
import { Provider as ReduxProvider } from 'react-redux';
import { graphql, HttpResponse } from 'msw';

const meta = {
  component: OrderPage,
} satisfies Meta<typeof OrderPage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
      <ReduxProvider store={store}>
        <OrderPage {...args} />
      </ReduxProvider>
    )
  },
  parameters: {
    msw: {
      handlers: [
        graphql.query('getOrders', () => {
          return HttpResponse.json({
            "data": {
              "orders": [
                {
                  "id": "1",
                  "details": {
                    "address": "Heiloostraat, 391",
                    "name": "hakan",
                    "phone": "06"
                  },
                  "pizzas": [
                    {
                      "id": "1",
                      "name": "Margherita",
                      "price": 5,
                      "description": "The classic pizza",
                      "pictureUrl": "/pizzas/pizza-margherita.png"
                    },
                    {
                      "id": "2",
                      "name": "Pepperoni",
                      "price": 7,
                      "description": "The classic pizza with added pepperoni",
                      "pictureUrl": "/pizzas/pizza-pepperoni.png"
                    },
                    {
                      "id": "3",
                      "name": "Vegetariana",
                      "price": 7,
                      "description": "Tomato sauce, mozzarella, mushrooms, pepper, onion, fresh spinach and fresh tomato.",
                      "pictureUrl": "/pizzas/pizza-vegetariana.png"
                    },
                    {
                      "id": "4",
                      "name": "Hawaiian",
                      "price": 8,
                      "description": "The pizza that makes Italians shake their heads",
                      "pictureUrl": "/pizzas/pizza-hawaii.png"
                    }
                  ]
                }
              ]
            }
          });
        }),
      ],
    }
  },
  args: {
    handleOrderSubmit: () => { },
  },
}

export const mockedOrders = {
  "data": {
    "orders": [
      {
        "id": "1",
        "details": {
          "address": "Heiloostraat, 391",
          "name": "hakan",
          "phone": "06"
        },
        "pizzas": [
          {
            "id": "1",
            "name": "Margherita",
            "price": 5,
            "description": "The classic pizza",
            "pictureUrl": "/pizzas/pizza-margherita.png"
          },
          {
            "id": "2",
            "name": "Pepperoni",
            "price": 7,
            "description": "The classic pizza with added pepperoni",
            "pictureUrl": "/pizzas/pizza-pepperoni.png"
          },
          {
            "id": "3",
            "name": "Vegetariana",
            "price": 7,
            "description": "Tomato sauce, mozzarella, mushrooms, pepper, onion, fresh spinach and fresh tomato.",
            "pictureUrl": "/pizzas/pizza-vegetariana.png"
          },
          {
            "id": "4",
            "name": "Hawaiian",
            "price": 8,
            "description": "The pizza that makes Italians shake their heads",
            "pictureUrl": "/pizzas/pizza-hawaii.png"
          }
        ]
      }
    ]
  }
}
