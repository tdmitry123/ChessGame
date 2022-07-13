const path = require('path');

module.exports = {
  entry: {
    script: './sources-js/script.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'scripts'),
  },
};