const path = require("path");

module.exports = {
     entry: "./src/js/index.js",
     output: {
        filename: "main.js",
        path: path.resolve(_dirname, "dist"),
   },
   module: "development",

};
