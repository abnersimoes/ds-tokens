const {
  fileHeader,
  formattedVariables,
} = require("style-dictionary/lib/common/formatHelpers");

function getTokensContent({ dictionary, options = {}, lineSeparator = "\n" }) {
  const { outputReferences } = options;

  return formattedVariables({
    formatting: {
      lineSeparator,
    },
    format: "css",
    dictionary,
    outputReferences,
  });
}

module.exports = function ({ file, ...props }) {
  return (
    fileHeader({ file }) +
    // `@media (prefers-color-scheme: dark) {\n` +
    // `  :root {\n  ` +
    // getTokensContent({ lineSeparator: "\n  ", ...props }) +
    // `\n  }\n` +
    // `}\n\n` +
    `[data-color-scheme="dark"] {\n` +
    getTokensContent(props) +
    `\n}\n`
  );
};
