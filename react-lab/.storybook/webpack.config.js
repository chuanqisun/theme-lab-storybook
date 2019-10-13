const path = require('path');

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
      'sass-loader',
    ],
    include: path.resolve(__dirname, '../'),
  });

  return config;
};
