import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // settings for multiple components
    // we use obj {...} when we have multiple editing
    extend: {
      container:{
        center:true,
        padding:'24px'
      },
      transitionDuration:{
        DEFAULT: "300ms",//0.3
      }
    },
  },
  plugins: [],
} satisfies Config;
