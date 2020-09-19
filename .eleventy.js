const CleanCSS = require("clean-css");
module.exports = function (eleventyConfig) {
  // Add a filter using the Config API
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    dir: {
      // Only process the `index.md` file, ignore the `README`.
      input: "index.md",
    },
  };
};
