const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
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
    module: {
        rules:[            {
            test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader?modules"]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            chunks: ['main'],
            filename: 'index.html'
            // filename: "html/index.html"
        }),
        new CopyPlugin({
            patterns: [
              { from: "./public", to: "" },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:5].css"
        })
        
    ],
    devServer: {
        port: 8000,
        open: true,
        // openPage: "html/index.html",
    },
}