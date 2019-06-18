const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const cwd = process.cwd()
const mode = 'production'

module.exports = {
  context: path.join(cwd, 'src'),
  mode,

  optimization: {
    minimizer: [
      new TerserPlugin({
        chunkFilter: (chunk) => {
          if (chunk.name === 'config') {
            return false;
          }
    
          return true;
        },
      }),
    ],
    runtimeChunk: 'single',
    //minimize: false,
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        config: {
          name: "config",
          test: /[\\/]src[\\/]js[\\/]config[\\/]/,
          minSize: 0
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        }
      },
    },
  },

  entry: {
    app: ['../src/index.js'],

  },

  output: {
    path: path.resolve('dist'),
    filename: 'bundle_[name].js'
  },

  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      use: {
        loader: 'babel-loader',
        query: {
            presets: ['@babel/react', '@babel/env'],
            plugins: ["@babel/plugin-proposal-class-properties"]
        }
      },
      exclude: /node_modules/
    },

    // {
    //   test: /\.json$/,
    //   use: ['json-loader'],
    //   exclude: /node_modules/
    // },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'scss-loader'
      ]
    },
    {
      test: /\.(png|jpg|jpeg|svg|gif)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.(pptx|zip)$/,
      loader: "file-loader",
      options: {
        name: '[name].[ext]'
      }
    }]
  },
}