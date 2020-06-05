const webpack = require('@cypress/webpack-preprocessor');
const path = require('path');
const tsconfig = require('../../../../tsconfig.json');

//console.log(tsconfig.compilerOptions.paths);
const aliases = tsconfig.compilerOptions.paths;
const webpackAliases = {};
const relPathToLibs = '../../../../';
for (const alias of Object.keys(aliases)) {
  // console.log(alias, aliases[alias]);
  webpackAliases[alias] = path.resolve(__dirname, relPathToLibs + aliases[alias]);
}
console.log(webpackAliases);

const webpackConfig = {
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {...webpackAliases}
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.feature$/,
        use: [
          {
            loader: 'cypress-cucumber-preprocessor/loader'
          }
        ]
      }
    ]
  }
};

const fileProcessor = (on) => {
  const options = {
    webpackOptions: webpackConfig
  };
  on('file:preprocessor', (file) => {
    return webpack(options)(file);
  });
};

module.exports = fileProcessor;
