const FONT_PATH_PREFIX_DEFAULT = "../";

function buildFontFaceUrls(formats, prefix, filename) {
  const formatsMap = {
    woff2: "woff2",
    woff: "woff",
    ttf: "truetype",
    otf: "opentype",
    svg: "svg",
    eot: "embedded-opentype",
  };

  return formats.map(
    (extension) =>
      `url("${prefix}${filename}.${extension}") format("${formatsMap[extension]}")`
  );
}

module.exports = function ({ dictionary: { allTokens }, options }) {
  const fontPathPrefix = options.fontPathPrefix || FONT_PATH_PREFIX_DEFAULT;

  return allTokens
    .reduce((fontList, prop) => {
      const { formats } = prop;

      const fonts = prop.styles
        .map((style) => {
          const urls = buildFontFaceUrls(formats, fontPathPrefix, style.file);

          return [
            "@font-face {",
            `\n\tfont-family: "${prop.value}";`,
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
};
