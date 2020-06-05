const { preprocessTypescript } = require('@nrwl/cypress/plugins/preprocessor');

module.exports = function(on, config) {
  on('file:preprocessor', preprocessTypescript(config, (wpConfig) => {
    wpConfig.node = { fs: 'empty', child_process: 'empty', readline: 'empty' };
    wpConfig.module.rules.push({
      test: /\.feature$/,
      use: [{
        loader: 'cypress-cucumber-preprocessor/loader'
      }]
    });
    return wpConfig
  }));
};
