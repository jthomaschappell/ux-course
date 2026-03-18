import { useTheme } from '../hooks/useTheme';
import { THEMES } from '../themes';

export function ThemeToggle() {
  const { theme, setThemeId } = useTheme();

  return (
    <div className="theme-toggle" role="radiogroup" aria-label="Color theme">
      <span className="theme-toggle-label">Theme</span>
      <div className="theme-toggle-options">
        {THEMES.map((t) => (
          <button
            key={t.id}
            type="button"
            role="radio"
            aria-checked={t.id === theme.id}
            aria-label={t.label}
            className={`theme-swatch ${t.id === theme.id ? 'active' : ''}`}
            style={{ '--swatch-color': t.swatch } as React.CSSProperties}
            onClick={() => setThemeId(t.id)}
          >
            <span className="theme-swatch-dot" />
            <span className="theme-swatch-name">{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
