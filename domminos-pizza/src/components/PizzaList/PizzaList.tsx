import { useState } from "react";
import type { Pizza as PizzaType } from "../../models/pizza";
import { Pizza } from "./PizzaItem/PizzaItem";

type PizzaListProps = {
  chosenPizzas: PizzaType[];
  setChosenPizzas: (pizzas: PizzaType[]) => void;
}

export const PizzaList = ({ chosenPizzas, setChosenPizzas }: PizzaListProps) => {
  const [newPizza, setNewPizza] = useState<PizzaType | null>(null);
  return (
    <>
      <section className="gap-4 grid grid-cols-4 pt-2">
        {chosenPizzas.map(({ name, price, description, pictureUrl }) => (
          <div key={name}>
            <Pizza
              name={name}
              price={price}
              description={description}
              pictureUrl={pictureUrl}
            />
          </div>
        ))}
      </section>
      <form
        className="flex flex-col gap-5 dark:bg-gray-800 m-2 my-8 p-8 rounded-lg w-fit"
        onSubmit={e => {
          e.preventDefault();
          if (!newPizza?.name || !newPizza?.price || !newPizza?.description || !newPizza?.pictureUrl) return;
          setChosenPizzas([...chosenPizzas, newPizza]);
          setNewPizza(null);
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={newPizza?.name || ""}
          onChange={e => setNewPizza({ ...newPizza, name: e.target.value } as PizzaType)}
          className="dark:bg-gray-700 p-1 border dark:border-gray-600 rounded dark:text-gray-200"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={newPizza?.price || ""}
          onChange={e => setNewPizza({ ...newPizza, price: Number(e.target.value) } as PizzaType)}
          className="dark:bg-gray-700 p-1 border dark:border-gray-600 rounded dark:text-gray-200"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newPizza?.description || ""}
          onChange={e => setNewPizza({ ...newPizza, description: e.target.value } as PizzaType)}
          className="dark:bg-gray-700 p-1 border dark:border-gray-600 rounded dark:text-gray-200"
          required
        />
        <input
          type="text"
          placeholder="Picture URL"
          value={newPizza?.pictureUrl || ""}
          onChange={e => setNewPizza({ ...newPizza, pictureUrl: e.target.value } as PizzaType)}
          className="dark:bg-gray-700 p-1 border dark:border-gray-600 rounded dark:text-gray-200"
          required
        />
        <button type="submit" className="bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600 px-2 py-1 rounded text-white">
          Add Pizza
        </button>
      </form>
    </>
  )
}
