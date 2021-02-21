const pluginTailwindCSS = require("eleventy-plugin-tailwindcss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginTailwindCSS, {
    src: "src/assets/css/tailwind.css",
    dest: "assets/css",
    keepFolderStructure: false,
    minify: true,
    configFile: "./tailwind.config.js",
    watchEleventyWatchTargets: false,
  });

  return {
    dir: {
      input: "src",
      output: "build",
      include: "includes",
    },
  };
};
