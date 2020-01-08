
const path = require('path');


function vcodePlugin(options, ctx)
{
    return({
        name: 'vcode',
        enhanceAppFiles: 
        [
            path.resolve(__dirname, 'enhanceAppFile.js')
        ]
    });
}

module.exports = vcodePlugin;