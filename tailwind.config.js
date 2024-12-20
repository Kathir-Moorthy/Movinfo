module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        purpleLight: '#7C3AED',
        purpleDark: '#4C1D95',
      },
      animation: {
        'slide-in': 'slideIn 1.5s ease-out', // For the header
        'fade-in': 'fadeIn 1.5s ease-in', // For the footer
      },
      keyframes: {
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-50%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};