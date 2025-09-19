import { Route, Routes } from 'react-router';
import { useTheme } from '../../hooks/useTheme';
import { About } from '../About/About';
import { FourOhFour } from '../FourOhFour/FourOhFour';
import { Home } from '../Home/Home';
import { PizzaPage } from '../PizzaPage/PizzaPage';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { OrderPage } from '../OrderPage/OrderPage';
import type { OrderDetails } from '@/models/order-details';
import type { Order } from '@/models/order';
import { useAddOrderMutation } from '../../Mutations/add-order';
import { useChosenPizzas, useChosenPizzasDispatch } from '../Store/chosen-pizzas';
import { useEffect } from 'react';
import { useAppDispatch } from '../Store';
import { useOrdersQuery } from '@/hooks/useOrders';
import { addOrder as addOrderAction, setOrders } from '../Store/order';

export const PizzaDataHandler = () => {
  const { setTheme } = useTheme();
  const chosenPizzas = useChosenPizzas();
  const dispatch = useChosenPizzasDispatch();
  const { addOrder } = useAddOrderMutation();
  const reduxDispatch = useAppDispatch();
  const { orders } = useOrdersQuery();

  async function handleOrderSubmit(details: OrderDetails) {
    const pizzaIds = chosenPizzas.map((p) => p.id);
    const variables = {
      ...details,
      pizzaIds,
    };
    await addOrder(variables).then((result) => {
      if (result.data) {
        reduxDispatch(addOrderAction(result.data?.addOrder));
      }
      dispatch({ type: 'clear' });
    });
  }

  useEffect(() => {
    if (orders) {
      // Because Orders is a <Maybe<Order>>[], we filter out any null or undefined values
      const validOrders = orders.filter((order): order is Order => order != null);
      reduxDispatch(setOrders(validOrders));
    }
  }, [orders, reduxDispatch])

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