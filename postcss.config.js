const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const isDev = process.env.APP_ENV === "development";

const plugins = [
  tailwindcss('tailwind.config.js'),
  autoprefixer,
];

if (!isDev) {
  const purgecss = require('@fullhuman/postcss-purgecss');

  [].push.apply(plugins, [
    purgecss({
      content: ['src/**/*.njk', 'src/**/*.md', 'src/**/*.js'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }),
  ]);
}

module.exports = { plugins };
