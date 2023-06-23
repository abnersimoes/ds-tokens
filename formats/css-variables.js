const {
  fileHeader,
  formattedVariables,
} = require("style-dictionary/lib/common/formatHelpers");

module.exports = function ({ file, dictionary, options = {} }) {
  const selector = options.selector ? options.selector : `:root`;
  const backdropSelector = "::backdrop";
  const { outputReferences } = options;
  const { allTokens } = dictionary;
  const backdropTokens = allTokens.filter(
    ({ attributes }) => attributes.type === "backdrop"
  );
  const backdropDictionary = { ...dictionary, allTokens: backdropTokens };

  return (
    fileHeader({ file }) +
    `${backdropSelector} {\n` +
    formattedVariables({
      format: "css",
      dictionary: backdropDictionary,
      outputReferences,
    }) +
    `\n}\n\n` +
    `${selector} {\n` +
    formattedVariables({ format: "css", dictionary, outputReferences }) +
    `\n}\n`
  );
};
