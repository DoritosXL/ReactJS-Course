import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import type { ConcreteTheme, Theme } from '../models/theme';

const getSystemTheme = (): ConcreteTheme => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const useTheme = (): { theme: Theme; setTheme: Dispatch<SetStateAction<Theme>> } => {
  const [theme, setTheme] = useState<Theme>('system');
  const [effectiveTheme, setEffectiveTheme] = useState<ConcreteTheme>(getSystemTheme());

  useEffect(() => {    
    if (theme !== 'system') {
      console.log('trigger effective theme')
      setEffectiveTheme(theme);
      return;
    }

    setEffectiveTheme(getSystemTheme());

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      setEffectiveTheme(getSystemTheme());
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    if (effectiveTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [effectiveTheme]);

  return { theme, setTheme };
};