module.exports = function(eleventyConfig) {
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
