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
        <div className="m-2 flex h-full flex-col items-center rounded-lg border border-gray-200 p-4 shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <img
                src={pictureUrl}
                width={100}
                height={100}
                style={{ objectFit: 'cover', borderRadius: '8px' }}
                alt={name}
            />
            <p className="dark:text-white">{name}</p>
            <p className="dark:text-gray-300">{description}</p>
            <p className="text-lg font-bold text-red-500">$ {price}</p>
            <NavLink
                className="mt-auto rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
                to={`/pizza/${id}`}
            >
                details
            </NavLink>
        </div>
    )
}
