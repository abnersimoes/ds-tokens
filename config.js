const StyleDictionary = require("style-dictionary");
const { getChildrenOfFolder } = require("./utils");

const BRAND_PATH = require("path").resolve(__dirname, "src/brand");
const PLATFORM_PATH = require("path").resolve(__dirname, "src/platform");
const BRANDS = getChildrenOfFolder(BRAND_PATH);
const PLATFORMS = getChildrenOfFolder(PLATFORM_PATH);
const PREFIX = "";
// const FONT_PATH_PREFIX = "../assets/fonts/";

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
      // "web/css/font-face": {
      //   transforms: ["attribute/font"],
      //   buildPath: `build/${platform}/${brand}/`,
      //   actions: ["copy_assets"],
      //   files: [
      //     {
      //       destination: "font-face.css",
      //       format: "font-face",
      //       filter: {
      //         attributes: {
      //           category: "asset",
      //           type: "font",
      //         },
      //       },
      //       options: {
      //         fontPathPrefix: FONT_PATH_PREFIX,
      //       },
      //     },
      //   ],
      // },
      "web/scss/font-face": {
        transforms: ["attribute/font"],
        buildPath: `build/${platform}/${brand}/`,
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

StyleDictionary.registerFormat({
  name: "json/flat",
  formatter: function (dictionary) {
    return JSON.stringify(dictionary.allProperties, null, 2);
  },
});

StyleDictionary.registerFormat({
  name: "font-face",
  formatter: ({ dictionary: { allTokens }, options }) => {
    const fontPathPrefix = options.fontPathPrefix || "../";

    const formatsMap = {
      woff2: "woff2",
      woff: "woff",
      ttf: "truetype",
      otf: "opentype",
      svg: "svg",
      eot: "embedded-opentype",
    };

    return allTokens
      .reduce((fontList, prop) => {
        const { formats } = prop;

        const fonts = prop.styles
          .map((style) => {
            const urls = formats.map(
              (extension) =>
                `url("${fontPathPrefix}${style.file}.${extension}") format("${formatsMap[extension]}")`
            );

            return [
              "@font-face {",
              `\n\tfont-family: "${prop.family}";`,
              `\n\tfont-style: ${style.style};`,
              `\n\tfont-weight: ${style.weight};`,
              `\n\tsrc: ${urls.join(",\n\t\t\t ")};`,
              `\n\tfont-display: ${prop.display};`,
              "\n}\n",
            ].join("");
          })
          .join("\n");

        fontList.push(fonts);

        return fontList;
      }, [])
      .join("\n");
  },
});

StyleDictionary.registerTransform({
  name: "attribute/font",
  type: "attribute",
  transformer: (prop) => ({
    category: prop.path[0],
    type: prop.path[1],
  }),
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
      // instance.buildPlatform("web/css/font-face");
      instance.buildPlatform("web/scss/font-face");
    }
  });
});

console.log("\nBuild completed!");
