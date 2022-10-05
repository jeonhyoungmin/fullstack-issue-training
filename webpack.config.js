// URL 참고 하기 : https://yamoo9.gitbook.io/webpack/

const path = require('path')
const getAbsolutePath = (pathDir) => path.resolve(__dirname, pathDir)

module.exports = (_env, argv) => {
  const isProd = argv.mode === 'production'
  const isDev = !isProd

  return {
    entry: {
      main: './src/index.js',
    },
    resolve: {
      extensions: ['js', 'jsx', 'json'],
      alias: {
        '@components': getAbsolutePath('src/components/'),
        '@contexts': getAbsolutePath('src/contexts/'),
        '@hooks': getAbsolutePath('src/hooks/'),
        '@pages': getAbsolutePath('src/pages/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                cacheCompression: false,
                envName: isProd ? 'production' : 'development'
              }
            }
          ]
        }
      ]
    },
    output: {
      path: getAbsolutePath('dist'),
      filename: 'assets/js/[name].[contenthash:8].js',
      publicPath: '/',
    },
    mode: 'development',
    devtool: isDev && 'cheap-module-source-map',
  }
}