const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './src/dist'),
    filename: 'app.js'
  },
  devServer:{
    contentBase: 'public',
    watchContentBase: true
  },
  plugins: [
    new WriteFilePlugin(),
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        files: ["./src/**"],
        watchOptions:{
            awaitWriteFinish: true,
            ignored: /node_modules/
        },
        server: { baseDir: ['./src'] }
    },
    {
        reload: false
    })
]
};