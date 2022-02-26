module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      screens: {
         xs: "480px",
         sm: "640px",
         // => @media (min-width: 640px) { ... }

         md: "768px",
         // => @media (min-width: 768px) { ... }

         lg: "1024px",
         // => @media (min-width: 1024px) { ... }

         xl: "1280px",
         // => @media (min-width: 1280px) { ... }

         "2xl": "1536px",
         // => @media (min-width: 1536px) { ... }
      },
      extend: {
         colors: {
            primary: "#efffff",
            secondary: "#6a46b9",
            dimmed: "#ba96f9",
            light: "#ffffee",
            dark: "#1a2b2b",
         },
      },
   },
   plugins: [],
};
