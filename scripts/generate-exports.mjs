#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get directory name in ESM
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const rootDir = path.resolve(dirname, "..");

// Read the package.json file
const packageJsonPath = path.join(rootDir, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

// Get all component directories
const srcDir = path.join(rootDir, "src");
const componentDirs = fs
  .readdirSync(srcDir)
  .filter((dir) => fs.statSync(path.join(srcDir, dir)).isDirectory());

// Create the base export entry
const exports = {
  ".": {
    types: "./dist/index.d.ts",
    import: "./dist/index.mjs",
    require: "./dist/index.js",
  },
};

// Add all component exports
componentDirs.forEach((component) => {
  exports[`./${component}`] = {
    types: `./dist/${component}.d.ts`,
    import: `./dist/${component}.mjs`,
    require: `./dist/${component}.js`,
  };
});

// Update the package.json with the new exports field
packageJson.exports = exports;

// Write the updated package.json back to disk
fs.writeFileSync(
  packageJsonPath,
  JSON.stringify(packageJson, null, 2) + "\n",
  "utf8",
);

console.log(
  `✅ Generated exports for ${componentDirs.length} components in package.json`,
);
