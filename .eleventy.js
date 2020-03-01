module.exports = function(eleventyConfig) {
  // Add layout alias
  eleventyConfig.addLayoutAlias("base", "base.njk");

  // Copy static files directly to output.
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data',
    },
    passthroughFileCopy: true
  };
};
