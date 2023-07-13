const path = require('path');


module.exports = {
  mode: 'development',
  entry: {
    main: './generate-champion-info/main.js',
    championFetcher: './generate-champion-info/championFetcher.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    fallback: {
      stream: require.resolve('stream-http'),
      https: false,
      http: false,
      fs: false,
      crypto: false
    },
  },
};
