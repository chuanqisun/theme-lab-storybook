const path = require('path');
const globImporter = require('node-sass-glob-importer');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          config: {
            path: '.storybook/postcss.config.js',
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            importer: globImporter(),
          },
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  return config;
};
