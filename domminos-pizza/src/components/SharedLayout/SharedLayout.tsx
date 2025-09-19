import { Outlet } from 'react-router'
import { type Theme } from '../../models/theme'
import { NavBar } from '../NavBar/NavBar'
import { ThemeButtons } from '../ThemeButtons/ThemeButtons'

type SharedLayoutProps = {
  setTheme: (theme: Theme) => void
}

export const SharedLayout = ({ setTheme }: SharedLayoutProps) => {
  return (
    <>
      <NavBar>
        <ThemeButtons setTheme={setTheme} />
      </NavBar>
      <Outlet />
    </>
  )
}
