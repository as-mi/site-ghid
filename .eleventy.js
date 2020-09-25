const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  // Add a filter for minimizing CSS
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Add a transform for minimizing HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
    }

    return content;
  });

  // Copy `css/` directly to output.
  eleventyConfig.addPassthroughCopy("css");
};
