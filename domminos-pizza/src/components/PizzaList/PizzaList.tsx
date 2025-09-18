import type { Pizza } from '@/gql/graphql'
import { useState } from 'react'
import { PizzaItem } from './PizzaItem/PizzaItem'

type PizzaListProps = {
    chosenPizzas: Pizza[]
    setChosenPizzas: (pizzas: Pizza[]) => void
}

export const PizzaList = ({
    chosenPizzas,
    setChosenPizzas,
}: PizzaListProps) => {
    const [newPizza, setNewPizza] = useState<Pizza | null>(null)
    return (
        <>
            <section className="grid grid-cols-4 gap-4 pt-2">
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
                className="m-2 my-8 flex w-fit flex-col gap-5 rounded-lg p-8 dark:bg-gray-800"
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
                    setChosenPizzas([
                        ...chosenPizzas,
                        { ...newPizza, id: newPizzaId },
                    ])
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
                    className="rounded border p-1 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
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
                    className="rounded border p-1 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
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
                    className="rounded border p-1 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
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
                    className="rounded border p-1 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                    required
                />
                <button
                    type="submit"
                    className="rounded bg-blue-500 px-2 py-1 text-white dark:bg-blue-700 dark:hover:bg-blue-600"
                >
                    Add Pizza
                </button>
            </form>
        </>
    )
}
