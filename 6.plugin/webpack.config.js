const path = require('path');
// const MyPlugin = require('./plugins/MyPlugin');
var FileListPlugin = require("./plugins/FileListPlugin")
module.exports = {
    mode: 'development',
    watch: true,
    entry: {
        main: './src/index.js',
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[id].[chunkhash:5].js'
    },
    plugins: [
        // new MyPlugin(),
        new FileListPlugin("文件列表.md")
    ]
}