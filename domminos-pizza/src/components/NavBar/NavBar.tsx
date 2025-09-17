import type { ReactNode } from "react";
import type { Pizza } from "../../models/pizza"

type NavBarProps = {
  chosenPizzas: Pizza[];
  setChosenPizzas: (pizzas: Pizza[]) => void;
  children: ReactNode;
}

export const NavBar = ({ chosenPizzas, setChosenPizzas, children }: NavBarProps) => {
  const totalPrice = chosenPizzas.reduce((sum, pizza) => sum + pizza.price, 0);
  const totalAmount = chosenPizzas.length;

  const handleClearCart = () => {
    setChosenPizzas([]);
  }

  return (
    <>
      <nav className="flex justify-between bg-white dark:bg-gray-800 shadow-md p-4">
        {children}
        <ul className="flex items-center mx-auto">
          <li className="flex space-x-6 font-semibold text-gray-700 dark:text-gray-200 text-lg">
            <span className="hover:text-red-500 dark:hover:text-red-400 cursor-pointer">Home</span>
          </li>
        </ul>
        <div className="relative ml-auto text-gray-700 dark:text-gray-200">
          <span>
            Shopping Cart:
            <p>total price: {totalPrice}</p>
            <p>total pizzas: {totalAmount}</p>
            <button onClick={() => handleClearCart()} className="bg-red-500 hover:bg-red-600 ml-4 px-4 py-2 rounded text-white transition-colors">
              Clear cart
            </button>
          </span>
        </div>
      </nav>
    </>
  )
}