const path = require('path');

module.exports = env => ({
  mode: env,
  output: {
    filename: "[chunkhash].js",
  }
});