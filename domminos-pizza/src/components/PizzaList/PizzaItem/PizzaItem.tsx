import type { Pizza as PizzaType } from "../../../models/pizza";

export const Pizza = ({ name, description, price, pictureUrl }: PizzaType) => {
  return (
    <div className="flex flex-col items-center shadow-md hover:shadow-lg m-2 p-4 border border-gray-200 dark:border-gray-700 rounded-lg h-full dark:bg-gray-800">
      <img
        src={pictureUrl}
        width={100}
        height={100}
        style={{ objectFit: "cover", borderRadius: "8px" }}
        alt={name}
      />
      <p className="dark:text-white">
        {name}
      </p>
      <p className="dark:text-gray-300">
        {description}
      </p>
      <p className="font-bold text-red-500 text-lg">
        $ {price}
      </p>

    </div>
  )
}