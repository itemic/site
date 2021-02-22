// Figure this out
const colors = require("tailwindcss/colors")

module.exports = {
  purge: {
    enabled: true,
    content: [
      "./**/*.html",
      "./**/*..scss",
      "./**/*..css",
      "./**/*..js",
      "./**/*..md",
      "./**/*..yml",
    ],
    safelist: [/^from-/, /^to-/, /^text-/], // Retain all classes starting with...
    options: {
      safelist: [/^from-/, /^to-/, /^text-/],
      whitelist: [/^from-/, /^to-/, /^text-/],
    },
  },
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        "light-blue": colors.lightBlue,
        white: colors.white,
        amber: colors.amber,
        lime: colors.lime,
        orange: colors.orange,
      },
      textColor: {
        linkedin: "#0061a2",
        github: "#767676",
        twitter: "#178def",
      },
    },
    height: {
      half: "50vh",
    },
  },
  darkMode: "media",
  plugins: [
    require("@tailwindcss/typography"),
    require("@mjwebs/tailwindcss-frosted"),
  ],
}
