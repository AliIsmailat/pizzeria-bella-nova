import type { Config } from 'tailwindcss'
import { theme } from './src/content.ts'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tomato: theme.colors.tomato,
        'tomato-dark': theme.colors.tomatoDark,
        cream: theme.colors.cream,
        basil: theme.colors.basil,
        'basil-muted': theme.colors.basilMuted,
        tint: theme.colors.tint,
      },
      fontFamily: {
        display: [`"${theme.fonts.display.family}"`, 'system-ui', 'sans-serif'],
        sans: [`"${theme.fonts.body.family}"`, 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: theme.radius.card,
        button: theme.radius.button,
        tag: theme.radius.tag,
      },
    },
  },
} satisfies Config
