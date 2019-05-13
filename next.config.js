require('dotenv').config(); // eslint-disable-line
const path = require('path')
const Dotenv = require('dotenv-webpack')
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack: config => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    return config
  }
});
