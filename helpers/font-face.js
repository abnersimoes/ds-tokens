const PREFIX_FONT_PATH = {
  css: "./",
  scss: "#{$font-path}/",
};

function buildFontFaceFiles() {
  const extensions = Object.keys(PREFIX_FONT_PATH);

  return extensions.map((extension) => ({
    destination: `font-face.${extension}`,
    format: "fontFace",
    filter: {
      attributes: {
        category: "asset",
        type: "font",
      },
    },
    options: {
      fontPathPrefix: PREFIX_FONT_PATH[extension],
    },
  }));
}

module.exports = { buildFontFaceFiles };
