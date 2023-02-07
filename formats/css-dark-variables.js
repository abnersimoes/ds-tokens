const {
  fileHeader,
  formattedVariables,
} = require("style-dictionary/lib/common/formatHelpers");

module.exports = function ({ dictionary, options = {}, file }) {
  const selector = options.selector ? options.selector : `\n:root`;
  const { outputReferences } = options;

  return (
    fileHeader({ file }) +
    `@media (prefers-color-scheme: dark) {\n` +
    `${selector} {\n` +
    formattedVariables({ format: "css", dictionary, outputReferences }) +
    `\n}\n` +
    `\n}\n`
  );
};
