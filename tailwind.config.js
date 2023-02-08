/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      // screens
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440x",
      },
      // ## Colors
      colors: {
        // ### Primary
        cl_Blue: "hsl(246, 80%, 60%)",
        cl_Lightred: "hsl(15, 100%, 70%)",
        cl_Softblue: "hsl(195, 74%, 62%)",
        cl_Lightred: "hsl(348, 100%, 68%)",
        cl_Limegreen: "hsl(145, 58%, 55%)",
        cl_Violet: "hsl(264, 64%, 52%)",
        cl_Softorange: "hsl(43, 84%, 65%)",
        // ### Neutral
        cl_Verydarkblue: "hsl(226, 43%, 10%)",
        cl_Darkblue: "hsl(235, 46%, 20%)",
        cl_Desaturatedblue: "hsl(235, 45%, 61%)",
        cl_PaleBlue: "hsl(236, 100%, 87%)",
      },
    },
  },
  plugins: [],
}
