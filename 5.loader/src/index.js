var content = require("./assets/index.css")

console.log(content); //css的源码字符串

// 处理图片
var src = require("./assets/webpack.png")
console.log(src);
var img = document.createElement("img")
img.src = src;
document.body.appendChild(img);