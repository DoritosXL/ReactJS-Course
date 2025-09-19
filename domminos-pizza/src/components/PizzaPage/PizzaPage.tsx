import { useParams } from 'react-router'
import { useChosenPizzas } from '../Store/chosen-pizzas'

export const PizzaPage = () => {
  const params = useParams() // reads the parameters from the url  
  const pizzaId = params.pid

  const chosenPizzas = useChosenPizzas()
  const pizza = chosenPizzas.find((p) => p.id === pizzaId)

  const { pictureUrl, name, description, price } = pizza || {
    pictureUrl: '',
    name: '',
    description: '',
    price: 0,
  }
  if (!pizza) return <div>Pizza not found</div>
  return (
    <div className="flex flex-col items-center dark:bg-gray-800 shadow-md hover:shadow-lg m-2 p-4 border border-gray-200 dark:border-gray-700 rounded-lg h-full">
      <img
        src={pictureUrl}
        width={100}
        height={100}
        style={{ objectFit: 'cover', borderRadius: '8px' }}
        alt={name}
      />
      <p className="dark:text-white">{name}</p>
      <p className="dark:text-gray-300">{description}</p>
      <p className="font-bold text-red-500 text-lg">$ {price}</p>
    </div>
  )
}
