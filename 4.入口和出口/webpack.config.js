const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
    watch: true,
    entry: {
        main: './src/index.js',
        a: ['./src/a.js', './src/index.js']
    },
    output:{
        path: path.resolve(__dirname, 'target'),
        filename: '[id].[chunkhash:5].js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}