import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"], // Map Inter
        roboto: ["var(--font-roboto)", "sans-serif"], // Map Roboto
        greatvibes: ["var(--font-great-vibes)", "cursive"], // Map Great Vibes
      },
      colors: {
        // Brand Colors
        primary: {
          green1: "#195A00",
          tan2: "#BC9A6C",
          orange3: "#FF9F0D",
        },
        secondary: {
          gold1: "#AF872F",
          cream2: "#EDEAE3",
          olive3: "#999966",
        },
        // State Colors
        info: "#2F80ED",
        success: "#27AE60",
        warning: "#E2B93B",
        error: "#EB5757",
        // Black Colors
        black1: "#1E1E1E",
        black2: "#1D1D1D",
        black3: "#282828",
        white: "#FFFFFF",
        // Grey Colors
        gray1: "#333333",
        gray2: "#4F4F4F",
        gray3: "#828282",
        gray4: "#BDBDBD",
        gray5: "#E0E0E0",
      },
    },
  },
  plugins: [],
};
export default config;
