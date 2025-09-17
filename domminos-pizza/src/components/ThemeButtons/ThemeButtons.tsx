import type { Theme } from "../../models/theme";
import { GenericButton } from "./Button";

type ThemeButtonsProps = {
  setTheme: (theme: Theme) => void;
}
export const ThemeButtons = ({ setTheme }: ThemeButtonsProps) => {
  const handleToggleThemeDark = () => setTheme('dark')
  const handleToggleThemeLight = () => setTheme('light')
  const handleToggleThemeSystem = () => setTheme('system')

  return (
    <>
      <GenericButton handleToggle={handleToggleThemeLight} title="Toggle theme to light">☀️</GenericButton>
      <GenericButton handleToggle={handleToggleThemeDark} title="Toggle theme to dark">🌙</GenericButton>
      <GenericButton handleToggle={handleToggleThemeSystem} title="Toggle theme to system">🌐</GenericButton>
    </>
  )
}