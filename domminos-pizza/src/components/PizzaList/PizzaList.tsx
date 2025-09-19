import type { Pizza } from '@/gql/graphql'
import { useState } from 'react'
import { PizzaItem } from './PizzaItem/PizzaItem'
import { useChosenPizzas, useChosenPizzasDispatch } from '../Store/chosen-pizzas'

export const PizzaList = () => {
  const chosenPizzas = useChosenPizzas()
  const dispatch = useChosenPizzasDispatch()
  const [newPizza, setNewPizza] = useState<Pizza | null>(null)
  return (
    <>
      <section className="gap-4 grid grid-cols-4 pt-2">
        {chosenPizzas.map(
          ({ name, price, description, pictureUrl, id }) => (
            <div key={name}>
              <PizzaItem
                name={name}
                price={price}
                description={description}
                pictureUrl={pictureUrl}
                id={id}
              />
            </div>
          )
        )}
      </section>
      <form
        className="flex flex-col gap-5 dark:bg-gray-800 m-2 my-8 p-8 rounded-lg w-fit"
        onSubmit={(e) => {
          e.preventDefault()
          const newPizzaId = crypto.randomUUID()
          if (
            !newPizza?.name ||
            !newPizza?.price ||
            !newPizza?.description ||
            !newPizza?.pictureUrl
          )
            return
          dispatch({ type: 'add', pizza: { ...newPizza, id: newPizzaId } })
          setNewPizza(null)
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={newPizza?.name || ''}
          onChange={(e) =>
            setNewPizza({
              ...newPizza,
              name: e.target.value,
            } as Pizza)
          }
          className="dark:bg-gray-700 p-1 border dark:border-gray-600 rounded dark:text-gray-200"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={newPizza?.price || ''}
          onChange={(e) =>
            setNewPizza({
              ...newPizza,
              price: Number(e.target.value),
            } as Pizza)
          }
          className="dark:bg-gray-700 p-1 border dark:border-gray-600 rounded dark:text-gray-200"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newPizza?.description || ''}
          onChange={(e) =>
            setNewPizza({
              ...newPizza,
              description: e.target.value,
            } as Pizza)
          }
          className="dark:bg-gray-700 p-1 border dark:border-gray-600 rounded dark:text-gray-200"
          required
        />
        <input
          type="text"
          placeholder="Picture URL"
          value={newPizza?.pictureUrl || ''}
          onChange={(e) =>
            setNewPizza({
              ...newPizza,
              pictureUrl: e.target.value,
            } as Pizza)
          }
          className="dark:bg-gray-700 p-1 border dark:border-gray-600 rounded dark:text-gray-200"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600 px-2 py-1 rounded text-white"
        >
          Add Pizza
        </button>
      </form>
    </>
  )
}
