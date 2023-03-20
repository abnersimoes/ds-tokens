const LIGHT_MODE = "light-mode";
const DARK_MODE = "dark-mode";

function darkFilesFilter(token) {
  return token.filePath.indexOf(`.dark`) > -1;
}

const options = { showFileHeader: false };

const lightModeConfig = {
  stylesheets: [
    {
      destination: "tokens.css",
      format: "css/variables",
      options,
    },
    {
      destination: "tokens.scss",
      format: "css/variables",
      options,
    },
  ],
  json: [
    {
      destination: "tokens.json",
      format: "json/flat",
      options,
    },
  ],
  js: [
    {
      destination: "tokens.cjs.js",
      format: "javascript/module",
      options,
    },
    {
      destination: "tokens.esm.js",
      format: "javascript/es6",
      options,
    },
  ],
};

const darkModeConfig = {
  stylesheets: [
    {
      destination: "tokens.dark.css",
      format: "css/dark-variables",
      filter: darkFilesFilter,
      options,
    },
    {
      destination: "tokens.dark.scss",
      format: "css/dark-variables",
      filter: darkFilesFilter,
      options,
    },
  ],
  json: [
    {
      destination: "tokens.dark.json",
      format: "json/flat",
      filter: darkFilesFilter,
      options,
    },
  ],
  js: [
    {
      destination: "tokens.dark.cjs.js",
      format: "javascript/module",
      filter: darkFilesFilter,
      options,
    },
    {
      destination: "tokens.dark.esm.js",
      format: "javascript/es6",
      filter: darkFilesFilter,
      options,
    },
  ],
};

const colorScheme = {
  [LIGHT_MODE]: lightModeConfig,
  [DARK_MODE]: darkModeConfig,
};

module.exports = { LIGHT_MODE, DARK_MODE, colorScheme };
