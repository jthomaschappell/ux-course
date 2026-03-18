export interface ThemeColors {
  '--color-bg': string;
  '--color-bg-soft': string;
  '--color-surface': string;
  '--color-surface-hover': string;
  '--color-border': string;
  '--color-text': string;
  '--color-text-muted': string;
  '--color-accent': string;
  '--color-accent-2': string;
  '--color-accent-hover': string;
  '--color-success': string;
  '--color-focus': string;
  '--color-warn': string;
  '--shadow-glow': string;
  '--shadow-deep': string;
  '--gradient-main': string;
  '--stripe-1': string;
  '--stripe-1-opacity': string;
  '--stripe-2': string;
  '--stripe-2-opacity': string;
  '--stripe-3': string;
  '--stripe-3-opacity': string;
  '--stripe-4': string;
  '--stripe-4-opacity': string;
  '--stripe-soft-1': string;
  '--stripe-soft-1-opacity': string;
  '--stripe-soft-2': string;
  '--stripe-soft-2-opacity': string;
  '--stripe-soft-3': string;
  '--stripe-soft-3-opacity': string;
}

export interface Theme {
  id: string;
  label: string;
  swatch: string;
  colors: ThemeColors;
}

export const THEMES: Theme[] = [
  {
    id: 'ocean',
    label: 'Ocean',
    swatch: '#0077B6',
    colors: {
      '--color-bg': '#CAF0F8',
      '--color-bg-soft': '#ffffff',
      '--color-surface': '#ffffff',
      '--color-surface-hover': '#E6F7FB',
      '--color-border': '#B8E8F0',
      '--color-text': '#03045E',
      '--color-text-muted': '#4a6b7c',
      '--color-accent': '#0077B6',
      '--color-accent-2': '#03045E',
      '--color-accent-hover': '#00B4D8',
      '--color-success': '#28a35e',
      '--color-focus': '#0077B6',
      '--color-warn': '#f2aa2a',
      '--shadow-glow': '0 12px 24px rgba(0, 119, 182, 0.22)',
      '--shadow-deep': '0 14px 40px rgba(3, 4, 94, 0.08)',
      '--gradient-main': 'linear-gradient(90deg, #03045E 0%, #0077B6 100%)',
      '--stripe-1': '#0077B6',
      '--stripe-1-opacity': '0.5',
      '--stripe-2': '#00B4D8',
      '--stripe-2-opacity': '0.42',
      '--stripe-3': '#90E0EF',
      '--stripe-3-opacity': '0.28',
      '--stripe-4': '#03045E',
      '--stripe-4-opacity': '0.18',
      '--stripe-soft-1': '#00B4D8',
      '--stripe-soft-1-opacity': '0.28',
      '--stripe-soft-2': '#90E0EF',
      '--stripe-soft-2-opacity': '0.2',
      '--stripe-soft-3': '#03045E',
      '--stripe-soft-3-opacity': '0.14',
    },
  },
  {
    id: 'sunset',
    label: 'Sunset',
    swatch: '#E85D26',
    colors: {
      '--color-bg': '#FFF0E6',
      '--color-bg-soft': '#ffffff',
      '--color-surface': '#ffffff',
      '--color-surface-hover': '#FFF5ED',
      '--color-border': '#F5D0B5',
      '--color-text': '#4A1A04',
      '--color-text-muted': '#7C5A42',
      '--color-accent': '#E85D26',
      '--color-accent-2': '#6B1D0E',
      '--color-accent-hover': '#FF7F50',
      '--color-success': '#28a35e',
      '--color-focus': '#E85D26',
      '--color-warn': '#f2aa2a',
      '--shadow-glow': '0 12px 24px rgba(232, 93, 38, 0.22)',
      '--shadow-deep': '0 14px 40px rgba(107, 29, 14, 0.08)',
      '--gradient-main': 'linear-gradient(90deg, #6B1D0E 0%, #E85D26 100%)',
      '--stripe-1': '#E85D26',
      '--stripe-1-opacity': '0.45',
      '--stripe-2': '#FF7F50',
      '--stripe-2-opacity': '0.38',
      '--stripe-3': '#FFB088',
      '--stripe-3-opacity': '0.25',
      '--stripe-4': '#6B1D0E',
      '--stripe-4-opacity': '0.16',
      '--stripe-soft-1': '#FF7F50',
      '--stripe-soft-1-opacity': '0.25',
      '--stripe-soft-2': '#FFB088',
      '--stripe-soft-2-opacity': '0.18',
      '--stripe-soft-3': '#6B1D0E',
      '--stripe-soft-3-opacity': '0.12',
    },
  },
  {
    id: 'forest',
    label: 'Forest',
    swatch: '#0E8345',
    colors: {
      '--color-bg': '#E2F5E9',
      '--color-bg-soft': '#ffffff',
      '--color-surface': '#ffffff',
      '--color-surface-hover': '#EBF8EF',
      '--color-border': '#B0DFC0',
      '--color-text': '#0A3D1E',
      '--color-text-muted': '#4A7C5A',
      '--color-accent': '#0E8345',
      '--color-accent-2': '#0A3D1E',
      '--color-accent-hover': '#2ECC71',
      '--color-success': '#28a35e',
      '--color-focus': '#0E8345',
      '--color-warn': '#f2aa2a',
      '--shadow-glow': '0 12px 24px rgba(14, 131, 69, 0.22)',
      '--shadow-deep': '0 14px 40px rgba(10, 61, 30, 0.08)',
      '--gradient-main': 'linear-gradient(90deg, #0A3D1E 0%, #0E8345 100%)',
      '--stripe-1': '#0E8345',
      '--stripe-1-opacity': '0.45',
      '--stripe-2': '#2ECC71',
      '--stripe-2-opacity': '0.38',
      '--stripe-3': '#82E6A8',
      '--stripe-3-opacity': '0.25',
      '--stripe-4': '#0A3D1E',
      '--stripe-4-opacity': '0.16',
      '--stripe-soft-1': '#2ECC71',
      '--stripe-soft-1-opacity': '0.25',
      '--stripe-soft-2': '#82E6A8',
      '--stripe-soft-2-opacity': '0.18',
      '--stripe-soft-3': '#0A3D1E',
      '--stripe-soft-3-opacity': '0.12',
    },
  },
  {
    id: 'lavender',
    label: 'Lavender',
    swatch: '#7C3AED',
    colors: {
      '--color-bg': '#EDE7F6',
      '--color-bg-soft': '#ffffff',
      '--color-surface': '#ffffff',
      '--color-surface-hover': '#F3EEFA',
      '--color-border': '#D1C4E9',
      '--color-text': '#2E1065',
      '--color-text-muted': '#6B5B8D',
      '--color-accent': '#7C3AED',
      '--color-accent-2': '#2E1065',
      '--color-accent-hover': '#A855F7',
      '--color-success': '#28a35e',
      '--color-focus': '#7C3AED',
      '--color-warn': '#f2aa2a',
      '--shadow-glow': '0 12px 24px rgba(124, 58, 237, 0.22)',
      '--shadow-deep': '0 14px 40px rgba(46, 16, 101, 0.08)',
      '--gradient-main': 'linear-gradient(90deg, #2E1065 0%, #7C3AED 100%)',
      '--stripe-1': '#7C3AED',
      '--stripe-1-opacity': '0.45',
      '--stripe-2': '#A855F7',
      '--stripe-2-opacity': '0.38',
      '--stripe-3': '#D8B4FE',
      '--stripe-3-opacity': '0.25',
      '--stripe-4': '#2E1065',
      '--stripe-4-opacity': '0.16',
      '--stripe-soft-1': '#A855F7',
      '--stripe-soft-1-opacity': '0.25',
      '--stripe-soft-2': '#D8B4FE',
      '--stripe-soft-2-opacity': '0.18',
      '--stripe-soft-3': '#2E1065',
      '--stripe-soft-3-opacity': '0.12',
    },
  },
  {
    id: 'rose',
    label: 'Rose',
    swatch: '#E11D79',
    colors: {
      '--color-bg': '#FDE7EF',
      '--color-bg-soft': '#ffffff',
      '--color-surface': '#ffffff',
      '--color-surface-hover': '#FDEEF4',
      '--color-border': '#F5B8D1',
      '--color-text': '#5E0B36',
      '--color-text-muted': '#8C4A6B',
      '--color-accent': '#E11D79',
      '--color-accent-2': '#5E0B36',
      '--color-accent-hover': '#F472B6',
      '--color-success': '#28a35e',
      '--color-focus': '#E11D79',
      '--color-warn': '#f2aa2a',
      '--shadow-glow': '0 12px 24px rgba(225, 29, 121, 0.22)',
      '--shadow-deep': '0 14px 40px rgba(94, 11, 54, 0.08)',
      '--gradient-main': 'linear-gradient(90deg, #5E0B36 0%, #E11D79 100%)',
      '--stripe-1': '#E11D79',
      '--stripe-1-opacity': '0.45',
      '--stripe-2': '#F472B6',
      '--stripe-2-opacity': '0.38',
      '--stripe-3': '#FBCFE8',
      '--stripe-3-opacity': '0.25',
      '--stripe-4': '#5E0B36',
      '--stripe-4-opacity': '0.16',
      '--stripe-soft-1': '#F472B6',
      '--stripe-soft-1-opacity': '0.25',
      '--stripe-soft-2': '#FBCFE8',
      '--stripe-soft-2-opacity': '0.18',
      '--stripe-soft-3': '#5E0B36',
      '--stripe-soft-3-opacity': '0.12',
    },
  },
];

export const DEFAULT_THEME_ID = 'ocean';
