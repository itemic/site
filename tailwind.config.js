// Figure this out
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: true,
    content: [
      "./**/*.html",
      "./**/*..scss",
      "./**/*..css",
      "./**/*..js",
      "./**/*..md",
    ],
  },
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        "light-blue": colors.lightBlue,
        white: colors.white,
        amber: colors.amber,
        lime: colors.lime,
      },
    },
  },
  darkMode: "media",
  plugins: [
    require("@tailwindcss/typography"),
    require("@mjwebs/tailwindcss-frosted"),
  ],
};
