const StyleDictionary = require("style-dictionary");
const { getChildrenOfFolder } = require("./utils");

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
      "web/js": {
        transformGroup: "tokens-js",
        buildPath: `build/${platform}/${brand}/`,
        prefix: PREFIX,
        files: [
          {
            destination: "tokens.cjs.js",
            format: "javascript/module",
          },
          {
            destination: "tokens.esm.js",
            format: "javascript/es6",
          },
        ],
      },
      "web/json": {
        transformGroup: "tokens-json",
        buildPath: `build/${platform}/${brand}/`,
        prefix: PREFIX,
        files: [
          {
            destination: "tokens.json",
            format: "json/flat",
          },
        ],
      },
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
        transformGroup: "css",
        buildPath: `build/${platform}/${brand}/`,
        prefix: PREFIX,
        files: [
          {
            destination: "tokens.css",
            format: "css/variables",
          },
        ],
      },
    },
  };
}

StyleDictionary.registerFormat({
  name: "json/flat",
  formatter: function (dictionary) {
    return JSON.stringify(dictionary.allProperties, null, 2);
  },
});

StyleDictionary.registerTransformGroup({
  name: "styleguide",
  transforms: ["attribute/cti", "name/cti/kebab", "size/px", "color/css"],
});

StyleDictionary.registerTransformGroup({
  name: "tokens-js",
  transforms: ["name/cti/constant", "size/px", "color/hex"],
});

StyleDictionary.registerTransformGroup({
  name: "tokens-json",
  transforms: ["attribute/cti", "name/cti/kebab", "size/px", "color/css"],
});

StyleDictionary.registerTransformGroup({
  name: "tokens-scss",
  transforms: ["name/cti/kebab", "time/seconds", "size/px", "color/css"],
});

StyleDictionary.transformGroup["css"];

PLATFORMS.map(function (platform) {
  BRANDS.map(function (brand) {
    console.log(`\nProcessing: ${platform}/${brand}`);

    const instance = StyleDictionary.extend(
      getStyleDictionaryConfig(brand, platform)
    );

    if (platform === "web") {
      instance.buildPlatform("web/js");
      instance.buildPlatform("web/json");
      instance.buildPlatform("web/scss");
      instance.buildPlatform("web/css");
    }
  });
});

console.log("\nBuild completed!");
