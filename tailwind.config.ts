import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        bground: '#06140e',
        fground: '#f7f4ee',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'nav-opacity': {
          from: {
            height: '5rem',
            backgroundColor: 'rgb(247 244 238/ 0)',
            backdropFilter: 'blur(0px)',
            color: 'rgb(247 244 238)',
          },
          to: {
            height: '3.5rem',
            backgroundColor: 'rgb(247 244 238/ 1)',
            backdropFilter: 'blur(12px)',
            color: 'rgb(6 20 14)',
          },
        },
        'scale-up': {
          from: {
            transform: 'scale(1)',
          },
          to: {
            transform: 'scale(1.3)',
          },
        },
        'translate-up': {
          from: {
            opacity: '1',
            transform: 'translateY(0%)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(-80%)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'nav-opacity': 'nav-opacity linear both',
        'scale-up': 'scale-up linear both',
        'translate-up': 'translate-up linear both',
      },
      supports: {
        'no-scroll-driven-animation': 'not(animation-timeline: scroll())',
        'no-view-driven-animation': 'not(animation-timeline: view())',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
