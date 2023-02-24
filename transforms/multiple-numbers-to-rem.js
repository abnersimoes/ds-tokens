const styleDictionary = require("style-dictionary");

const toRem = (value) =>
  styleDictionary.transform["size/rem"].transformer({ value });

// Add more verifications if you want to transform other tokens with multiple numbers
// Example of usage: "0 2 2.5" becomes "0rem 2rem 2.5rem"
const multipleNumbersMatcher = (prop) =>
  prop.attributes.type.includes("shadow") &&
  prop.attributes.category === "effect";

const webMultipleNumbersTransformer = (prop) => {
  const { value } = prop;
  return value
    .split(" ")
    .map((item) => toRem(item))
    .join(" ");
};

module.exports.multipleNumbersCSSTransform = {
  matcher: multipleNumbersMatcher,
  name: "css/multiple-numbers-to-rem",
  transformer: webMultipleNumbersTransformer,
  type: "value",
};

module.exports.multipleNumbersSASSTransform = {
  matcher: multipleNumbersMatcher,
  name: "sass/multiple-numbers-to-rem",
  transformer: webMultipleNumbersTransformer,
  type: "value",
};
