const STYLE_EXTENSIONS = ["css", "scss"];

function darkFilesFilter(token) {
  return token.filePath.indexOf(`.dark`) > -1;
}

function buildStylesByExtensions({ sufix = "", config = {} }) {
  return STYLE_EXTENSIONS.map((extension) => ({
    destination: `tokens${sufix}.${extension}`,
    format: `${extension}/variables`,
    ...config,
  }));
}

function buildStylesFiles(isDarkMode) {
  const darkConfig = {
    filter: darkFilesFilter,
    options: {
      outputReferences: true,
    },
  };

  return isDarkMode
    ? buildStylesByExtensions({ sufix: ".dark", config: darkConfig })
    : buildStylesByExtensions({});
}

module.exports = { buildStylesFiles };
