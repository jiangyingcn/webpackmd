const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports  = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        loader: './loaders/style-loader.js',
                        options: {
                            changeVar: '变量'
                        }
                    }
                ]
            },
            {
                test: /\.(png)|(jpg)|(gif)$/, use: [{
                    loader: "./loaders/img-loader.js",
                    options: {
                        limit: 6000, //6000字节以上使用图片，6000字节以内使用base64
                        filename: "img-[contenthash:5].[ext]"
                    }
                }]
            }
        ]
    },
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist', 'js'),
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            chunks: ['main'],
            filename: 'index.html'
        }),
        new CopyPlugin([
            { from: "./public", to: "./" }
        ])
        
    ]
}