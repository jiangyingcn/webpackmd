const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: '[name].[chunkhash:5].js',
        publicPath: "/"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            chunks: ['main'],
            filename: 'index.html'
            // filename: "html/index.html"
        }),
    ],
    module: {
        rules: [{
            test: /\.md$/,
            use: ['./md-loader/index.js']
        }]
    },
    devServer: {
        port: 8000,
        open: true,
        // openPage: "html/index.html",
    },
}