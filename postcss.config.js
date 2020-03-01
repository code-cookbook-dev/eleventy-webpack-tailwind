const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const plugins = [
  tailwindcss('tailwind.config.js'),
  autoprefixer,
];

module.exports = { plugins };
