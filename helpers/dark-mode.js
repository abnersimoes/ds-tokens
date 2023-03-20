function darkFilesFilter(token) {
  return token.filePath.indexOf(`.dark`) > -1;
}

function buildStylesFiles(isDarkMode) {
  return isDarkMode
    ? [
        {
          destination: "tokens.dark.css",
          format: "css/dark-variables",
          filter: darkFilesFilter,
        },
        {
          destination: "tokens.dark.scss",
          format: "css/dark-variables",
          filter: darkFilesFilter,
        },
      ]
    : [
        {
          destination: "tokens.css",
          format: "css/variables",
        },
        {
          destination: "tokens.scss",
          format: "css/variables",
        },
      ];
}

function buildJsonFiles(isDarkMode) {
  return isDarkMode
    ? [
        {
          destination: "tokens.dark.json",
          format: "json/flat",
          filter: darkFilesFilter,
        },
      ]
    : [
        {
          destination: "tokens.json",
          format: "json/flat",
        },
      ];
}

[
  {
    destination: "tokens.cjs.js",
    format: "javascript/module",
  },
  {
    destination: "tokens.esm.js",
    format: "javascript/es6",
  },
];

function buildJsFiles(isDarkMode) {
  return isDarkMode
    ? [
        {
          destination: "tokens.dark.cjs.js",
          format: "javascript/module",
          filter: darkFilesFilter,
        },
        {
          destination: "tokens.dark.esm.js",
          format: "javascript/es6",
          filter: darkFilesFilter,
        },
      ]
    : [
        {
          destination: "tokens.cjs.js",
          format: "javascript/module",
        },
        {
          destination: "tokens.esm.js",
          format: "javascript/es6",
        },
      ];
}

module.exports = { buildStylesFiles, buildJsonFiles, buildJsFiles };
