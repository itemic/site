// Figure this out
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
  darkMode: "media",
  plugins: [
    require("@tailwindcss/typography"),
    require("@mjwebs/tailwindcss-frosted"),
  ],
};
