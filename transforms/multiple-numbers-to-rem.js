const styleDictionary = require("style-dictionary");
const { splitSizeAndColor } = require("../utils/units");

const toRem = (value) =>
  styleDictionary.transform["size/rem"].transformer({ value });

const multipleNumbersMatcher = (prop) =>
  prop.attributes.type.includes("shadow") &&
  prop.attributes.category === "effect";

const webMultipleNumbersTransformer = (prop) => {
  const { value } = prop;
  const [size, color] = splitSizeAndColor(value);
  const sizeTransformed = size.split(" ").map(toRem).join(" ");

  return `${sizeTransformed}${color}`;
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
