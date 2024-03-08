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
        'peach-fuzz': {
          '50': 'hsl(23, 100%, 96%)',
          '100': 'hsl(24, 100%, 92%)',
          '200': 'hsl(22, 98%, 80%)',
          '300': 'hsl(21, 97%, 72%)',
          '400': 'hsl(17, 96%, 61%)',
          '500': 'hsl(15, 95%, 53%)',
          '600': 'hsl(11, 90%, 48%)',
          '700': 'hsl(8, 88%, 40%)',
          '800': 'hsl(5, 79%, 34%)',
          '900': 'hsl(6, 75%, 28%)',
          '950': 'hsl(3, 81%, 15%)',
        },
        'pirate-black': {
          '50': 'hsl(180, 5%, 96%)',
          '100': 'hsl(180, 6%, 90%)',
          '200': 'hsl(180, 5%, 82%)',
          '300': 'hsl(180, 6%, 69%)',
          '400': 'hsl(180, 5%, 53%)',
          '500': 'hsl(180, 6%, 43%)',
          '600': 'hsl(186, 5%, 36%)',
          '700': 'hsl(187, 5%, 31%)',
          '800': 'hsl(190, 4%, 27%)',
          '900': 'hsl(192, 4%, 25%)',
          '950': 'hsl(195, 5%, 15%)',
        },

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
            backgroundColor: 'hsl(23, 100%, 96%, 0)',
            backdropFilter: 'blur(0px)',
            color: 'rgb(247 244 238)',
          },
          to: {
            height: '3.5rem',
            backgroundColor: 'hsl(23, 100%, 96%, 1)',
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
