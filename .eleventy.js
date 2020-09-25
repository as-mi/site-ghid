const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
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
