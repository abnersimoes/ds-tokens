const StyleDictionary = require("style-dictionary");
const { fontFaceFormatter } = require("./config/font-face");
const { getChildrenOfFolder } = require("./config/utils");

const BRAND_PATH = require("path").resolve(__dirname, "src/brand");
const PLATFORM_PATH = require("path").resolve(__dirname, "src/platform");
const BRANDS = getChildrenOfFolder(BRAND_PATH);
const PLATFORMS = getChildrenOfFolder(PLATFORM_PATH);
const PREFIX = "";

function getStyleDictionaryConfig(brand, platform) {
  return {
    source: [
      `src/brand/${brand}/*.json`,
      "src/global/**/*.json",
      `src/platforms/${platform}/*.json`,
    ],
    platforms: {
      // "web/js": {
      //   transformGroup: "tokens-js",
      //   buildPath: `build/${platform}/${brand}/`,
      //   prefix: PREFIX,
      //   files: [
      //     {
      //       destination: "tokens.cjs.js",
      //       format: "javascript/module",
      //     },
      //     {
      //       destination: "tokens.esm.js",
      //       format: "javascript/es6",
      //     },
      //   ],
      // },
      // "web/json": {
      //   transformGroup: "tokens-json",
      //   buildPath: `build/${platform}/${brand}/`,
      //   prefix: PREFIX,
      //   files: [
      //     {
      //       destination: "tokens.json",
      //       format: "json/flat",
      //     },
      //   ],
      // },
      "web/scss": {
        transformGroup: "tokens-scss",
        buildPath: `build/${platform}/${brand}/`,
        prefix: PREFIX,
        files: [
          {
            destination: "tokens.scss",
            format: "scss/variables",
          },
        ],
      },
      "web/css": {
        transformGroup: "tokens-css",
        buildPath: `build/${platform}/${brand}/`,
        prefix: PREFIX,
        files: [
          {
            destination: "tokens.css",
            format: "css/variables",
          },
        ],
      },
      "web/css/font-face": {
        transforms: ["attribute/font"],
        buildPath: `build/${platform}/${brand}/`,
        // actions: ["copy_fonts"],
        files: [
          {
            destination: "font-face.css",
            format: "font-face",
            filter: {
              attributes: {
                category: "asset",
                type: "font",
              },
            },
            options: {
              fontPathPrefix: "var(--font-path)/",
            },
          },
        ],
      },
      "web/scss/font-face": {
        transforms: ["attribute/font"],
        srcPath: `src/brand/${brand}/assets`,
        buildPath: `build/${platform}/${brand}/`,
        actions: ["copy_fonts"],
        files: [
          {
            destination: "font-face.scss",
            format: "font-face",
            filter: {
              attributes: {
                category: "asset",
                type: "font",
              },
            },
            options: {
              fontPathPrefix: "#{$font-path}/",
            },
          },
        ],
      },
    },
  };
}

// StyleDictionary.registerFormat({
//   name: "json/flat",
//   formatter: function (dictionary) {
//     return JSON.stringify(dictionary.allProperties, null, 2);
//   },
// });

StyleDictionary.registerFormat({
  name: "font-face",
  formatter: fontFaceFormatter,
});

StyleDictionary.registerTransformGroup({
  name: "tokens-css",
  transforms: ["attribute/cti", "name/cti/kebab", "size/rem", "color/hex"],
});

// StyleDictionary.registerTransformGroup({
//   name: "tokens-js",
//   transforms: ["name/cti/constant", "size/rem", "color/hex"],
// });

// StyleDictionary.registerTransformGroup({
//   name: "tokens-json",
//   transforms: ["attribute/cti", "name/cti/kebab", "size/rem", "color/hex"],
// });

StyleDictionary.registerTransformGroup({
  name: "tokens-scss",
  transforms: ["attribute/cti", "name/cti/kebab", "size/rem", "color/hex"],
});

PLATFORMS.map(function (platform) {
  BRANDS.map(function (brand) {
    console.log(`\nProcessing: ${platform}/${brand}`);

    const instance = StyleDictionary.extend(
      getStyleDictionaryConfig(brand, platform)
    );

    if (platform === "web") {
      // instance.buildPlatform("web/js");
      // instance.buildPlatform("web/json");
      instance.buildPlatform("web/scss");
      instance.buildPlatform("web/css");
      instance.buildPlatform("web/css/font-face");
      instance.buildPlatform("web/scss/font-face");
    }
  });
});

console.log("\nBuild completed!");
