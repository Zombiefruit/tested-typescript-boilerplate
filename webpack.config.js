const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: ['core-js/shim', './src/index.ts'],
    tests: ['core-js/shim', 'mocha-loader!./test/webpack.ts'],
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            declaration: false,
          },
        },
      },
      {
        test: /\.js$/,
        include: [
          path.dirname(require.resolve('chai-as-promised')),
          path.dirname(require.resolve('chai-style')),
          path.join(__dirname, 'node_modules', 'webpack-dev-server', 'client'),
        ],
        loader: 'ts-loader',
        options: {
          // needed so it has a separate transpilation instance
          instance: 'lib-compat',
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    filename: '[name].js',
    pathinfo: true,
  },
  devServer: {
    disableHostCheck: true,
  },
};
