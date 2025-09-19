import type { Pizza } from "./gql/graphql";

export const succesPizzas: Pizza[] = [
  {
    __typename: 'Pizza',
    id: '1',
    name: 'Margherita',
    price: 10,
    description: 'Tomato, mozzarella, basil',
    pictureUrl: '/pizzas/pizza-margherita.png',
  },
  {
    __typename: 'Pizza',
    id: '2',
    name: 'Pepperoni',
    price: 12,
    description: 'Tomato, mozzarella, pepperoni',
    pictureUrl: '/pizzas/pizza-pepperoni.png',
  },
  {
    __typename: 'Pizza',
    id: '3',
    name: 'Hawaii',
    price: 10,
    description: 'Tomato, mozzarella, ham, pineapple',
    pictureUrl: '/pizzas/pizza-hawaii.png',
  },
  {
    __typename: 'Pizza',
    id: '4',
    name: 'Vegetariana',
    price: 10,
    description: 'Tomato, mozzarella, vegetables',
    pictureUrl: '/pizzas/pizza-vegetariana.png',
  },
];