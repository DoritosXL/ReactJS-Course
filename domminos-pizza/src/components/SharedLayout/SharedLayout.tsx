import type { Pizza } from '@/gql/graphql'
import { Outlet } from 'react-router'
import { type Theme } from '../../models/theme'
import { NavBar } from '../NavBar/NavBar'
import { ThemeButtons } from '../ThemeButtons/ThemeButtons'

type SharedLayoutProps = {
  chosenPizzas: Pizza[]
  setChosenPizzas: (pizzas: Pizza[]) => void
  setTheme: (theme: Theme) => void
}

export const SharedLayout = ({
  chosenPizzas,
  setChosenPizzas,
  setTheme,
}: SharedLayoutProps) => {
  return (
    <>
      <NavBar
        chosenPizzas={chosenPizzas}
        setChosenPizzas={setChosenPizzas}
      >
        <ThemeButtons setTheme={setTheme} />
      </NavBar>
      <Outlet />
    </>
  )
}
