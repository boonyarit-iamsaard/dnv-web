import { type MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'light',
  colors: {
    slate: [
      '#f8fafc',
      '#f1f5f9',
      '#e2e8f0',
      '#cbd5e1',
      '#94a3b8',
      '#64748b',
      '#475569',
      '#334155',
      '#1e293b',
      '#0f172a',
    ],
    stone: [
      '#fafaf9',
      '#f5f5f4',
      '#e7e5e4',
      '#d6d3d1',
      '#a8a29e',
      '#78716c',
      '#57534e',
      '#44403c',
      '#292524',
      '#1c1917',
    ],
  },
  fontFamily: 'Noto Sans, sans-serif',
  headings: {
    fontFamily: 'Noto Serif, serif',
  },
};
