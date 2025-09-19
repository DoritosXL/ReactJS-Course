import type { Pizza } from '@/gql/graphql'
import { NavLink } from 'react-router'

export const PizzaItem = ({
  name,
  description,
  price,
  pictureUrl,
  id,
}: Pizza) => {
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
      <NavLink
        className="bg-blue-500 hover:bg-blue-600 mt-auto px-4 py-2 rounded text-white transition-colors"
        to={`/pizza/${id}`}
      >
        details
      </NavLink>
    </div>
  )
}
