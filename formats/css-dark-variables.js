const {
  fileHeader,
  formattedVariables,
} = require("style-dictionary/lib/common/formatHelpers");

module.exports = function ({ file, dictionary, options = {} }) {
  const { outputReferences } = options;

  return (
    fileHeader({ file }) +
    `[data-color-scheme="dark"] {\n` +
    formattedVariables({
      format: "css",
      dictionary,
      outputReferences,
    }) +
    `\n}\n`
  );
};
