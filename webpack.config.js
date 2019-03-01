const path = require('path');

module.exports = {
  target: "node",
  entry: {
    app: ["./lib/server.js"]
  },
  node: { __filename: false, __dirname: false },
  output: {
    path: path.resolve(__dirname, "bundle"),
    filename: "server.js"
  },
  externals: {}
};
