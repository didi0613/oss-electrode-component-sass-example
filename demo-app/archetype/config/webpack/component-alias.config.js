"use strict";

const Path = require("path");

const repoPackagesDir = Path.join(__dirname, "../../../../packages");

const Fs = require("fs");

const components = Fs.readdirSync(repoPackagesDir);

const config = {
  resolve: {
    alias: {},
    modules: []
  }
};

components.forEach(folderName => {
  const packageName = require(Path.join(
    repoPackagesDir,
    folderName,
    "package.json"
  )).name;
  // Alias for package name
  config.resolve.alias[packageName] = Path.join(
    repoPackagesDir,
    folderName
  );
  // Modules Resolve Path
  config.resolve.modules.push(Path.resolve("node_modules"));
  config.resolve.modules.push(Path.join(repoPackagesDir, folderName));
  config.resolve.modules.push(
    Path.join(repoPackagesDir, folderName, "node_modules")
  );
});

module.exports = config;
