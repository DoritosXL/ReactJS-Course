import { useState } from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { PizzaList } from './components/PizzaList/PizzaList'
import { useTheme } from './hooks/useTheme'
import type { Pizza } from './models/pizza'

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

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="bg-white dark:bg-gray-900 p-4 min-h-screen">
      <NavBar chosenPizzas={chosenPizzas} setChosenPizzas={setChosenPizzas}>
        <button
          onClick={handleToggleTheme}
          className="ml-4 p-2 text-xl transition-colors hover:cursor-pointer"
          title="Toggle theme"
        >
          🌓
        </button>
      </NavBar>

      <PizzaList chosenPizzas={chosenPizzas} setChosenPizzas={setChosenPizzas} />
    </div>
  )
}

export default App
