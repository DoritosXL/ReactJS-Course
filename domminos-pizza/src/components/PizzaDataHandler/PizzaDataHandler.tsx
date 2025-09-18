import { Route, Routes } from 'react-router';
import { usePizzas } from '../../hooks/usePizzas';
import { useState } from 'react';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { Home } from '../Home/Home';
import { PizzaPage } from '../PizzaPage/PizzaPage';
import { About } from '../About/About';
import { FourOhFour } from '../FourOhFour/FourOhFour';
import { useTheme } from '../../hooks/useTheme';
import type { Pizza } from '@/gql/graphql';

export const PizzaDataHandler = () => {
  const { setTheme } = useTheme();
  const pizzas = usePizzas();
  const [chosenPizzas, setChosenPizzas] = useState<Pizza[]>(pizzas.data?.pizzas || []);

  return (
    <Routes>
      <Route
        path="/"
        element={<SharedLayout chosenPizzas={chosenPizzas} setChosenPizzas={setChosenPizzas} setTheme={setTheme} />}
      >
        <Route index element={<Home chosenPizzas={chosenPizzas} setChosenPizzas={setChosenPizzas} />} />
        <Route path="pizza/:pid" element={<PizzaPage />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<FourOhFour />} />
      </Route>
    </Routes>
  );
};
