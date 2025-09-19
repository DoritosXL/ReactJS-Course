import type { Meta, StoryObj } from '@storybook/react-vite';

import App from './App';
import { store } from './components/Store';
import { Provider } from 'urql';
import { MemoryRouter } from 'react-router';
import { ChosenPizzaProvider } from './components/Store/chosen-pizzas';
import { client } from './urqlClient';
import { Provider as ReduxProvider } from 'react-redux';
import { graphql, HttpResponse } from 'msw';
import { mockedOrders } from './components/OrderPage/OrderPage.stories';
import { succesPizzas } from './App.mocks';

const meta = {
  component: App,
  render: () => {
    return (
      <ReduxProvider store={store}>
        <Provider value={client}>
          <ChosenPizzaProvider>
            <MemoryRouter>
              <App />
            </MemoryRouter>
          </ChosenPizzaProvider>
        </Provider>
      </ReduxProvider>
    )
  },
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FilledShoppingCart: Story = {
  parameters: {
    msw: {
      handlers: [
        graphql.query('getPizzas', () => {
          return HttpResponse.json({
            data: {
              pizzas: succesPizzas,
            },
          });
        }),
        graphql.query('getOrders', () => {
          return HttpResponse.json({
            data: {
              orders: mockedOrders,
            },
          });
        }),
      ],
    }
  }
};