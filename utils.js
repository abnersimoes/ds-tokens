const { readdirSync } = require("fs");

function getChildrenOfFolder(parentFolder) {
  return readdirSync(parentFolder, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

module.exports = { getChildrenOfFolder };
