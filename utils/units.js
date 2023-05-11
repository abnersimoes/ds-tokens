function splitSizeAndColor(value) {
  const colorIndex = value.indexOf("rgb");

  return colorIndex > 0
    ? [value.slice(0, colorIndex - 1), ` ${value.slice(colorIndex)}`]
    : [value, ""];
}

module.exports = { splitSizeAndColor };
