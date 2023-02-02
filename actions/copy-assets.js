const fs = require("fs-extra");

module.exports = {
  do: function (_, config) {
    console.log("Copying assets directory");
    fs.copySync(config.srcPath, config.buildPath + "assets");
  },
  undo: function (_, config) {
    console.log("Cleaning assets directory");
    fs.removeSync(config.buildPath + "assets");
  },
};
