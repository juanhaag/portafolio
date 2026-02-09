/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#252525',
          500: '#333333',
        },
        accent: {
          emerald: '#10b981',
          'emerald-bright': '#34d399',
          cyan: '#06b6d4',
          'cyan-bright': '#22d3ee',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(16, 185, 129, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.8)' },
        }
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}
