/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: 'lf',
  arrowParens: 'always',
  singleQuote: true,
  tabWidth: 2,
  tailwindFunctions: ['classnames', 'clsx', 'cn', 'cva'],
  tailwindStylesheet: '/styles/globals.css',
  plugins: ['prettier-plugin-tailwindcss'],
};
