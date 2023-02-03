function darkFilesFilter(token) {
  return token.filePath.indexOf(`.dark`) > -1;
}

function buildStylesFiles(isDarkMode) {
  return isDarkMode
    ? [
        {
          destination: "tokens.dark.css",
          format: "css/dark-variables",
          format: "css/variables",
          filter: darkFilesFilter,
          options: {
            outputReferences: true,
          },
        },
        {
          destination: "tokens.dark.scss",
          format: "css/dark-variables",
          // format: "scss/dark-variables",
          filter: darkFilesFilter,
          options: {
            outputReferences: true,
          },
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
          // format: "scss/variables",
        },
      ];
}

module.exports = { buildStylesFiles };
