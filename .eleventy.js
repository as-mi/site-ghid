const htmlmin = require("html-minifier");
const pluginPWA = require("@pragmatics/eleventy-plugin-pwa");

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

  // Copy `images/` directly to output.
  eleventyConfig.addPassthroughCopy("images");

  // Add a plugin for PWA support
  eleventyConfig.addPlugin(pluginPWA);

  // Copy the PWA manifest to the output directory
  eleventyConfig.addPassthroughCopy("manifest.json");
};
