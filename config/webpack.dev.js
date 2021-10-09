const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = merge(common, {
    mode: 'development',
    plugins: [
        new CleanWebpackPlugin()
    ],
    devServer: {
        static: './dist',
        compress: true,
        hot: true
    },
})