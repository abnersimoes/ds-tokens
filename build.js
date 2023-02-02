const StyleDictionary = require("style-dictionary");
const { getChildrenOfFolder } = require("./utils/file");

const BRAND_PATH = require("path").resolve(__dirname, "src/brand");
const PLATFORM_PATH = require("path").resolve(__dirname, "src/platform");
const BRANDS = getChildrenOfFolder(BRAND_PATH);
const PLATFORMS = getChildrenOfFolder(PLATFORM_PATH);
const PREFIX = "";

const styleDictionary = StyleDictionary.extend({
  action: {
    copyAssets: require("./actions/copy-assets"),
  },
  transform: {
    "attribute/font-face": require("./transforms/font-face"),
  },
  format: {
    fontFace: require("./formats/font-face"),
  },
});

function getStyleDictionaryConfig(brand, platform) {
  const webPath = `build/${platform}/${brand}/`;

  return {
    source: [
      `src/brand/${brand}/*.json`,
      "src/global/**/*.json",
      `src/platforms/${platform}/*.json`,
    ],
    platforms: {
      "web/assets": {
        transforms: ["attribute/cti", "color/hex", "name/ti/camel"],
        srcPath: `src/brand/${brand}/assets`,
        buildPath: webPath,
        actions: [`copyAssets`],
      },
      "web/styles": {
        transforms: [
          "attribute/cti",
          "name/cti/kebab",
          "size/rem",
          "color/hex",
        ],
        buildPath: webPath,
        prefix: PREFIX,
        files: [
          {
            destination: "tokens.css",
            format: "css/variables",
          },
          {
            destination: "tokens.scss",
            format: "scss/variables",
          },
        ],
      },
      "web/font-face": {
        transforms: ["attribute/font-face"],
        buildPath: webPath,
        files: [
          {
            destination: "font-face.css",
            format: "fontFace",
            filter: {
              attributes: {
                category: "asset",
                type: "font",
              },
            },
            options: {
              fontPathPrefix: "./",
            },
          },
          {
            destination: "font-face.scss",
            format: "fontFace",
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

PLATFORMS.map(function (platform) {
  BRANDS.map(function (brand) {
    console.log(`\nProcessing: ${platform}/${brand}`);

    const instance = styleDictionary.extend(
      getStyleDictionaryConfig(brand, platform)
    );

    if (platform === "web") {
      instance.buildPlatform("web/assets");
      instance.buildPlatform("web/styles");
      instance.buildPlatform("web/font-face");
    }
  });
});

console.log("\nBuild completed!");
