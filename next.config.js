const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      ... {
        "@enviroments": path.resolve(__dirname, 'environments/'),
        "@components": path.resolve(__dirname, 'shared/components/'),
        "@services": path.resolve(__dirname, 'shared/services/'),
        "@styles": path.resolve(__dirname, 'shared/styles/')
      }
    }

    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })
    return config;
  }
});