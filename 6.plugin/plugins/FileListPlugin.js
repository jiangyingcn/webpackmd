module.exports = class FileListPlugin {

    constructor(filename = "filelist.txt"){
        this.filename = filename;
    }

    apply(compiler) {
        console.log('运行apply！');
        compiler.hooks.emit.tap("FileListPlugin", complation => {
            const fileList = [];
            for (const key in complation.assets) {
                const content = `【${key}】
                    大小：${complation.assets[key].size()/1000}KB`;
                fileList.push(content);
            }

            const str = fileList.join("\n\n");
            complation.assets[this.filename] = {
                source() {
                    return str
                },
                size() {
                    return str.length;
                }
            }
        })
    }
}