const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin-next');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: './assets/src/scripts/scripts.js',
    bundle: './assets/src/scripts/components/slider.js',
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'assets/dist/scripts/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: ['wp-scripts build'],
    }),
  ],
};
