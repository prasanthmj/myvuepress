const path = require('path');

module.exports = (options, ctx) => ({
    name: 'indexlist',
    enhanceAppFiles: [
        path.resolve(__dirname, 'enhanceAppFile.js')
    ]
});