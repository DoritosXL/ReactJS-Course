import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import type { Theme } from '../models/theme';

const getSystemTheme = (): Theme => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const useTheme = (): { theme: Theme; setTheme: Dispatch<SetStateAction<Theme>> } => {
  const [theme, setTheme] = useState<Theme>(getSystemTheme());

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return { theme, setTheme };
};