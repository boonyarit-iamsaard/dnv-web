/** @type {import("prettier").Config} */
module.exports = {
  arrowParens: 'avoid',
  singleQuote: true,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
};
