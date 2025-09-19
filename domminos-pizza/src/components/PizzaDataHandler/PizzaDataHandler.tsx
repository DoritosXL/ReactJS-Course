/* eslint-disable @typescript-eslint/no-misused-promises */
import type { Pizza } from '@/gql/graphql';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { usePizzas } from '../../hooks/usePizzas';
import { useTheme } from '../../hooks/useTheme';
import { About } from '../About/About';
import { FourOhFour } from '../FourOhFour/FourOhFour';
import { Home } from '../Home/Home';
import { PizzaPage } from '../PizzaPage/PizzaPage';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { OrderPage } from '../OrderPage/OrderPage';
import type { OrderDetails } from '@/models/order-details';
import { useAddOrderMutation } from '../../Mutations/add-order';

export const PizzaDataHandler = () => {
  const { setTheme } = useTheme();
  const pizzas = usePizzas();
  const [chosenPizzas, setChosenPizzas] = useState<Pizza[]>(pizzas.data?.pizzas || []);
  const { addOrder } = useAddOrderMutation();

  async function handleOrderSubmit(details: OrderDetails) {
    const pizzaIds = chosenPizzas.map((p) => p.id);
    const variables = {
      ...details,
      pizzaIds,
    };
    await addOrder(variables).then((result) => {
      if (result.data) {
        console.log('done with order', result.data);
      }
      setChosenPizzas([]);
    });
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <SharedLayout
            chosenPizzas={chosenPizzas}
            setChosenPizzas={setChosenPizzas}
            setTheme={setTheme}
          />
        }
      >
        <Route index
          element={
            <Home
              chosenPizzas={chosenPizzas}
              setChosenPizzas={setChosenPizzas}
            />
          }
        />
        <Route path="pizza/:pid" element={<PizzaPage />} />
        <Route
          path="order"
          element={<OrderPage handleOrderSubmit={handleOrderSubmit} />}
        />
        <Route path="about" element={<About />} />
        <Route path="*" element={<FourOhFour />} />
      </Route>
    </Routes>
  );
};