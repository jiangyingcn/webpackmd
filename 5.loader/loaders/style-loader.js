const loaderUtil = require('loader-utils');
module.exports = function (sourceCode) {
    const options = loaderUtil.getOptions(this);
    console.log(options);
    var code = `var style = document.createElement("style");
    style.innerHTML = \`${sourceCode}\`;
    document.head.appendChild(style);
    module.exports = \`${sourceCode}\``;
    return code;
}