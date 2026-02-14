/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          primary: '#0F172A',
          secondary: '#111827',
          card: '#1E293B',
          section: '#0B1220',
        },
        accent: {
          indigo: '#4F46E5',
          blue: '#3B82F6',
          soft: '#6366F1',
        },
        text: {
          heading: '#F8FAFC',
          secondary: '#CBD5E1',
          muted: '#94A3B8',
          label: '#64748B',
        },
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #4F46E5, #3B82F6)',
      },
      boxShadow: {
        'card': '0 10px 30px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 15px 40px rgba(59, 130, 246, 0.3)',
        'glow-blue': '0 0 40px -8px rgba(79, 70, 229, 0.4)',
      },
      borderRadius: {
        'card': '16px',
        'btn': '12px',
      },
      transitionDuration: {
        'smooth': '400ms',
        'smooth-lg': '600ms',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};
