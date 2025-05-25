/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(210, 90%, 50%)", // A nice blue
          hover: "hsl(210, 90%, 45%)",
          dark: "hsl(210, 80%, 60%)", // Lighter blue for dark mode
          'dark-hover': "hsl(210, 80%, 55%)",
        },
        secondary: {
          DEFAULT: "hsl(215, 20%, 50%)", // A muted gray-blue
          dark: "hsl(215, 15%, 70%)",
        },
        // You can add more specific dark mode colors if needed
        // For example, for backgrounds, text, borders, etc.
        'gray-50': '#f9fafb',
        'gray-100': '#f3f4f6',
        'gray-200': '#e5e7eb',
        'gray-300': '#d1d5db',
        'gray-400': '#9ca3af',
        'gray-500': '#6b7280',
        'gray-600': '#4b5563',
        'gray-700': '#374151',
        'gray-800': '#1f2937',
        'gray-900': '#111827',
      },
      spacing: {
        section: "3rem",
      },
      borderRadius: {
        container: "0.5rem",
      },
    },
  },
  plugins: [],
};
