const fs = require('fs');
const path = require('path');
const mdLoader = require('../md-loader')
try {
    const data =  fs.readFileSync(path.join(__dirname , '../button.md'), 'utf8');

    fs.writeFileSync(path.join(__dirname, 'button.vue'), mdLoader(data), err => {
        console.log(err)
    })
} catch (err) {
    console.log(err)
}