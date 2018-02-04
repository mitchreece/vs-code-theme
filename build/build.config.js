const { contributes } = require('../package.json')

module.exports = {
    destinationPath: `../${contributes.themes[0].path}`,
    inputPath: '../theme/index.js'
}