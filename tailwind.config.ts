import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System Colors using CSS Custom Properties
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
          active: "var(--color-primary-active)",
          focus: "var(--color-primary-focus)",
          disabled: "var(--color-primary-disabled)",
          // Legacy scale for compatibility
          50: "#f0fbff",
          100: "#e0f8ff",
          200: "#b3e8ff",
          300: "#7dd7ff",
          400: "#28beef",
          500: "var(--color-primary)",
          600: "var(--color-primary-hover)",
          700: "var(--color-primary-active)",
          800: "#0e6b87",
          900: "#0a4d62",
          950: "#063344",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
          active: "var(--color-accent-active)",
          focus: "var(--color-accent-focus)",
          disabled: "var(--color-accent-disabled)",
          // Legacy scale for compatibility
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "var(--color-accent)",
          600: "var(--color-accent-hover)",
          700: "var(--color-accent-active)",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        // Semantic Colors
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        "border-strong": "var(--color-border-strong)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        "text-inverse": "var(--color-text-inverse)",
        "text-primary": "var(--color-text-primary)",
        black: {
          DEFAULT: "var(--color-black)",
          hover: "var(--color-black-hover)",
          active: "var(--color-black-active)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          hover: "var(--color-success-hover)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
          hover: "var(--color-warning-hover)",
        },
        error: {
          DEFAULT: "var(--color-error)",
          hover: "var(--color-error-hover)",
        },
        // Legacy colors for compatibility
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: ["Roboto", "system-ui", "sans-serif"],
        heading: ["Open Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        'soft': '0 1px 2px 0 rgba(0, 0, 0, 0.02), 0 0 1px 0 rgba(0, 0, 0, 0.01)',
      },
    },
  },
  plugins: [],
} satisfies Config;