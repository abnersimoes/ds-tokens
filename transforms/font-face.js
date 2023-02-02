module.exports = {
  name: "attribute/font",
  type: "attribute",
  transformer: (prop) => ({
    category: prop.path[0],
    type: prop.path[1],
  }),
};
