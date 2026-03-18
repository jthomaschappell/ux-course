import { useEffect, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import { THEMES, DEFAULT_THEME_ID } from '../themes';
import type { ThemeColors } from '../themes';
import { ThemeContext } from './themeContextValue';

const THEME_STORAGE_KEY = 'ux-theme';

function getStoredThemeId(): string {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && THEMES.some((t) => t.id === stored)) return stored;
  } catch {
    /* ignore */
  }
  return DEFAULT_THEME_ID;
}

function applyThemeToDOM(colors: ThemeColors) {
  const root = document.documentElement;
  for (const [prop, value] of Object.entries(colors)) {
    root.style.setProperty(prop, value);
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeIdRaw] = useState(getStoredThemeId);

  const theme = THEMES.find((t) => t.id === themeId) ?? THEMES[0];

  const setThemeId = useCallback((id: string) => {
    setThemeIdRaw(id);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, id);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    applyThemeToDOM(theme.colors);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
}
