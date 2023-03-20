const StyleDictionary = require("style-dictionary");
const {
  buildStylesFiles,
  buildJsonFiles,
  buildJsFiles,
} = require("./helpers/dark-mode");
const { buildFontFaceFiles } = require("./helpers/font-face");
const { getChildrenOfFolder } = require("./utils/file");
const {
  multipleNumbersCSSTransform,
  multipleNumbersSASSTransform,
} = require("./transforms/multiple-numbers-to-rem");

const BRAND_PATH = require("path").resolve(__dirname, "src/brand");
const PLATFORM_PATH = require("path").resolve(__dirname, "src/platform");
const BRANDS = getChildrenOfFolder(BRAND_PATH);
const PLATFORMS = getChildrenOfFolder(PLATFORM_PATH);
const PREFIX = "";
const MODES = ["light", "dark"];

const styleDictionary = StyleDictionary.extend({
  action: {
    copyAssets: require("./actions/copy-assets"),
  },
  transform: {
    "attribute/font-face": require("./transforms/font-face"),
    "css/multiple-numbers-to-rem": multipleNumbersCSSTransform,
    "sass/multiple-numbers-to-rem": multipleNumbersSASSTransform,
  },
  format: {
    "styles/font-face": require("./formats/font-face"),
    "css/dark-variables": require("./formats/css-dark-variables"),
  },
});

function getPlatforms(brand, platform, isDarkMode) {
  const webPath = `build/${platform}/${brand}/`;

  return {
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
        "css/multiple-numbers-to-rem",
      ],
      buildPath: webPath,
      prefix: PREFIX,
      files: buildStylesFiles(isDarkMode),
    },
    "web/font-face": {
      transforms: ["attribute/font-face"],
      buildPath: webPath,
      files: buildFontFaceFiles(),
    },
    "web/json": {
      transforms: ["attribute/cti", "name/cti/kebab", "size/px", "color/css"],
      buildPath: webPath,
      prefix: PREFIX,
      files: buildJsonFiles(isDarkMode),
    },
    "web/js": {
      transforms: ["name/cti/constant", "size/px", "color/hex"],
      buildPath: webPath,
      prefix: PREFIX,
      files: buildJsFiles(isDarkMode),
    },
  };
}

function lightModeBuilder(brand, platform) {
  const isDarkMode = false;

  return {
    source: [
      `src/brand/${brand}/**/!(*.${MODES.join(`|*.`)}).json`,
      `src/global/**/!(*.${MODES.join(`|*.`)}).json`,
      `src/components/**/!(*.${MODES.join(`|*.`)}).json`,
      `src/platforms/${platform}/**/!(*.${MODES.join(`|*.`)}).json`,
    ],
    platforms: getPlatforms(brand, platform, isDarkMode),
  };
}

function darkModeBuilder(brand, platform) {
  const isDarkMode = true;

  return {
    include: [
      `src/brand/${brand}/**/!(*.${MODES.join(`|*.`)}).json`,
      `src/global/**/!(*.${MODES.join(`|*.`)}).json`,
      `src/components/**/!(*.${MODES.join(`|*.`)}).json`,
      `src/platforms/${platform}/**/!(*.${MODES.join(`|*.`)}).json`,
    ],
    source: [
      `src/brand/${brand}/**/*.dark.json`,
      `src/global/**/*.dark.json`,
      `src/components/**/*.dark.json`,
      `src/platforms/${platform}/**/*.dark.json`,
    ],
    platforms: getPlatforms(brand, platform, isDarkMode),
  };
}

console.log("========================================");

PLATFORMS.map(function (platform) {
  BRANDS.map(function (brand) {
    console.log(`🌞 Building Light mode for: ${platform}/${brand}`);

    const lightModeInstance = styleDictionary.extend(
      lightModeBuilder(brand, platform)
    );

    if (platform === "web") {
      lightModeInstance.buildPlatform("web/assets");
      lightModeInstance.buildPlatform("web/styles");
      lightModeInstance.buildPlatform("web/font-face");
      lightModeInstance.buildPlatform("web/json");
      lightModeInstance.buildPlatform("web/js");
    }

    console.log(`\n\n🌙 Building Dark mode: ${platform}/${brand}`);

    const darkModeInstance = styleDictionary.extend(
      darkModeBuilder(brand, platform)
    );

    if (platform === "web") {
      darkModeInstance.buildPlatform("web/assets");
      darkModeInstance.buildPlatform("web/styles");
      darkModeInstance.buildPlatform("web/font-face");
      darkModeInstance.buildPlatform("web/json");
      darkModeInstance.buildPlatform("web/js");
    }
  });
});

console.log("\nBuild completed!");
console.log("========================================");
