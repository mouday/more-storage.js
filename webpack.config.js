'use strict';

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin'); // 引入压缩插件

module.exports = {
  // 开发环境
  mode: 'production',

  // 根据不同的执行环境配置不同的入口
  entry: {
    // 未压缩版本
    'more-storage': './src/index.ts',
    // 压缩版本
    'more-storage.min': './src/index.ts',
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    // publicPath: '/dist/',
    filename: '[name].js',
    clean: true, // 在生成文件之前清空 output 目录

    library: {
      name: 'MoreStorage',
      type: 'umd',
      // 不添加的话引用的时候需要 libraryName.default
      export: 'default',
    },
  },

  // 开发
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    // open: true,
  },

  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      // js
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // 使用压缩插件
        include: /\.min\.js$/,
      }),
    ],
  },
};
