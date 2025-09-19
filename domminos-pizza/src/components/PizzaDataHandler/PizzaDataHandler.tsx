/* eslint-disable @typescript-eslint/no-misused-promises */
import { Route, Routes } from 'react-router';
import { useTheme } from '../../hooks/useTheme';
import { About } from '../About/About';
import { FourOhFour } from '../FourOhFour/FourOhFour';
import { Home } from '../Home/Home';
import { PizzaPage } from '../PizzaPage/PizzaPage';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { OrderPage } from '../OrderPage/OrderPage';
import type { OrderDetails } from '@/models/order-details';
import { useAddOrderMutation } from '../../Mutations/add-order';
import { useChosenPizzas, useChosenPizzasDispatch } from '../Store/chosen-pizzas';

export const PizzaDataHandler = () => {
  const { setTheme } = useTheme();
  const chosenPizzas = useChosenPizzas();
  const dispatch = useChosenPizzasDispatch();
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
      dispatch({ type: 'clear' });
    });
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <SharedLayout
            setTheme={setTheme}
          />
        }
      >
        <Route index
          element={
            <Home />
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