tailwind.config = {
  theme: {
    extend: {
      colors: {
        "galactic-blue": "#755CDE",
        "summer-yellow": "#F6A560",
        pink: "#F39E9E",
        "light-red": "#EB7565",
        cyan: "#61C4B7",
        "dark-purple": "#552049",
        black: "#030303",
        "medium-brown": "#7A746E",
        "light-cream": "#FFF7F0",
      },
      fontFamily: {
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        lg: [
          "56px ",
          {
            lineHeight: "70px",
            fontWeight: "bold",
          },
        ],
        md: [
          "40px ",
          {
            lineHeight: "51px",
            fontWeight: "bold",
          },
        ],
        sm: [
          "36px ",
          {
            lineHeight: "40px",
            fontWeight: "bold",
          },
        ],
        base: [
          "18px ",
          {
            lineHeight: "28px",
            fontWeight: "normal",
          },
        ],
      },
    },
  },
};
