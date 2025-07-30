module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Warm golden pasta glow
        primary: {
          DEFAULT: "#B8860B", // darkgoldenrod
          50: "#FDF9E7",
          100: "#FAF0C4",
          200: "#F5E085",
          300: "#EFCF46",
          400: "#E6BE1A",
          500: "#B8860B", // darkgoldenrod
          600: "#9A6F0A",
          700: "#7C5808",
          800: "#5E4206",
          900: "#3F2C04",
        },
        // Secondary Colors - Rich earth depth
        secondary: {
          DEFAULT: "#8B4513", // saddlebrown
          50: "#F7F0E8",
          100: "#EDDCC4",
          200: "#DBC085",
          300: "#C9A446",
          400: "#B78A1A",
          500: "#8B4513", // saddlebrown
          600: "#753910",
          700: "#5F2E0D",
          800: "#49220A",
          900: "#331707",
        },
        // Accent Colors - Quality emphasis
        accent: {
          DEFAULT: "#D4AF37", // gold
          50: "#FDFBF0",
          100: "#FAF4D1",
          200: "#F4E89E",
          300: "#EEDC6B",
          400: "#E8D038",
          500: "#D4AF37", // gold
          600: "#B4942F",
          700: "#947827",
          800: "#745D1F",
          900: "#544117",
        },
        // Background Colors
        background: "#FEFDF8", // warm cream canvas
        surface: "#F5F2E8", // subtle texture depth
        // Text Colors
        text: {
          primary: "#2C1810", // rich reading comfort
          secondary: "#5D4E37", // clear hierarchy support
        },
        // Status Colors
        success: {
          DEFAULT: "#228B22", // forestgreen
          50: "#E8F5E8",
          100: "#C8E6C8",
          200: "#91D091",
          300: "#5ABA5A",
          400: "#3BA33B",
          500: "#228B22", // forestgreen
          600: "#1E7A1E",
          700: "#1A691A",
          800: "#165816",
          900: "#124712",
        },
        warning: {
          DEFAULT: "#FF8C00", // darkorange
          50: "#FFF4E6",
          100: "#FFE4B8",
          200: "#FFCC7A",
          300: "#FFB43C",
          400: "#FF9C0E",
          500: "#FF8C00", // darkorange
          600: "#E07A00",
          700: "#C26800",
          800: "#A35600",
          900: "#854400",
        },
        error: {
          DEFAULT: "#CD5C5C", // indianred
          50: "#F9EDED",
          100: "#F0D0D0",
          200: "#E49A9A",
          300: "#D86464",
          400: "#D05050",
          500: "#CD5C5C", // indianred
          600: "#B54F4F",
          700: "#9D4242",
          800: "#853535",
          900: "#6D2828",
        },
        // Border Colors
        border: {
          DEFAULT: "#E8DCC0",
          light: "#F0E6D2",
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        sans: ['Source Sans Pro', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'warm': '0 4px 12px rgba(139, 69, 19, 0.1)',
        'warm-md': '0 6px 16px rgba(139, 69, 19, 0.15)',
        'warm-lg': '0 8px 24px rgba(139, 69, 19, 0.2)',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'gentle': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}