import { useState } from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { PizzaList } from './components/PizzaList/PizzaList'
import { useTheme } from './hooks/useTheme'
import type { Pizza } from './models/pizza'
import { ThemeButtons } from './components/ThemeButtons/ThemeButtons'

const pizzas: Pizza[] = [
  {
    name: 'Margherita',
    price: 5,
    description: 'The classic pizza',
    pictureUrl: '/pizzas/pizza-margherita.png',
  },
  {
    name: 'Pepperoni',
    price: 7,
    description: 'The classic pizza with added pepperoni',
    pictureUrl: '/pizzas/pizza-pepperoni.png',
  },
  {
    name: 'Vegetariana',
    price: 7,
    description:
      'Tomato sauce, mozzarella, mushrooms, pepper, onion, fresh spinach and fresh tomato.',
    pictureUrl: '/pizzas/pizza-vegetariana.png',
  },
  {
    name: 'Hawaiian',
    price: 8,
    description: 'The pizza that makes Italians shake their heads',
    pictureUrl: '/pizzas/pizza-hawaii.png',
  },
];



function App() {
  const [chosenPizzas, setChosenPizzas] = useState<Pizza[]>(pizzas)
  const { setTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-900 p-4 min-h-screen">
      <NavBar chosenPizzas={chosenPizzas} setChosenPizzas={setChosenPizzas}>
        <ThemeButtons setTheme={setTheme} />
      </NavBar>

      <PizzaList chosenPizzas={chosenPizzas} setChosenPizzas={setChosenPizzas} />
    </div>
  )
}

export default App