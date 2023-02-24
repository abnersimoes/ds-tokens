const styleDictionary = require("style-dictionary");

const toRem = (value) =>
  styleDictionary.transform["size/rem"].transformer({ value });

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
