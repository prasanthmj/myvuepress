
const path = require('path');


function bannerPlugin(options, ctx)
{
    return({
        name: 'banner',
        enhanceAppFiles: 
        [
            path.resolve(__dirname, 'enhanceAppFile.js')
        ]
    });
}

module.exports = bannerPlugin;