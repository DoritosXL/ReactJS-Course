import { useEffect, useState } from 'react'
import type { ConcreteTheme, Theme } from '../models/theme'

const getSystemTheme = (): ConcreteTheme =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const THEME_KEY = 'theme'

export const useTheme = (): {
    theme: Theme
    setTheme: (theme: Theme) => void
} => {
    const [theme, setThemeState] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem(THEME_KEY) as Theme | null
        return storedTheme ?? 'system'
    })
    const [effectiveTheme, setEffectiveTheme] =
        useState<ConcreteTheme>(getSystemTheme())

    const setTheme = (newTheme: Theme) => {
        if (newTheme === 'system') {
            localStorage.removeItem(THEME_KEY)
        } else {
            localStorage.setItem(THEME_KEY, newTheme)
        }
        setThemeState(newTheme)
    }

    useEffect(() => {
        if (theme !== 'system') {
            setEffectiveTheme(theme)
            return
        }

        setEffectiveTheme(getSystemTheme())

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = () => {
            setEffectiveTheme(getSystemTheme())
        }

        mediaQuery.addEventListener('change', handleChange)
        return () => {
            mediaQuery.removeEventListener('change', handleChange)
        }
    }, [theme])

    useEffect(() => {
        const root = document.documentElement
        if (effectiveTheme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [effectiveTheme])

    return { theme, setTheme }
}
