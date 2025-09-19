import { type ReactNode } from 'react'
import { NavLink } from 'react-router'
import { useChosenPizzas, useChosenPizzasDispatch } from '../Store/chosen-pizzas'
import { Button } from '../ui/button'
import { useAppDispatch, useAppSelector } from '../Store'
import { login, logout } from '../Store/auth'

type NavBarProps = {
  children: ReactNode
}

export const NavBar = ({ children }: NavBarProps) => {
  const chosenPizzas = useChosenPizzas()
  const dispatch = useChosenPizzasDispatch()
  const reduxDispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.auth)
  const totalPrice = chosenPizzas.reduce((sum, pizza) => sum + pizza.price, 0)
  const totalAmount = chosenPizzas.length

  const handleClearCart = () => {
    dispatch({ type: 'clear' })
  }

  function handleLogout() {
    reduxDispatch(logout())
  }

  function handleLogin() {
    reduxDispatch(login({ id: '1', name: 'User' }))
  }

  return (
    <>
      <nav className="flex justify-between bg-white dark:bg-gray-800 shadow-md p-4">
        {children}
        <ul className="flex items-center mx-auto">
          <li className="flex space-x-6 font-semibold text-gray-700 dark:text-gray-200 text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-grey-900 cursor-default border-b-2 border-blue-500'
                  : 'cursor-pointer hover:text-red-500 dark:hover:text-red-400'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-grey-900 cursor-default border-b-2 border-blue-500'
                  : 'cursor-pointer hover:text-red-500 dark:hover:text-red-400'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/order"
              className={({ isActive }) =>
                isActive
                  ? 'text-grey-900 cursor-default border-b-2 border-blue-500'
                  : 'cursor-pointer hover:text-red-500 dark:hover:text-red-400'
              }
            >
              Add Order
            </NavLink>
          </li>
        </ul>
        <div className="relative ml-auto text-gray-700 dark:text-gray-200">
          <span>
            Shopping Cart:
            <p>total price: {totalPrice}</p>
            <p>total pizzas: {totalAmount}</p>
            <button
              onClick={() => handleClearCart()}
              className="bg-red-500 hover:bg-red-600 ml-4 px-4 py-2 rounded text-white transition-colors"
            >
              Clear cart
            </button>
          </span>
        </div>
        <div>
          {user ? (
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 dark:text-gray-300">
                Welcome, {user.name}
              </span>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <Button onClick={handleLogin}>Login</Button>
          )}
        </div>
      </nav>
    </>
  )
}
