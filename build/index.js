const fs = require('fs')
const { resolve } = require('path')
const config = require('./build.config')
const themeSetup = require(config.inputPath)
const theme = require(config.destinationPath)


Object.assign(theme, {
    colors: themeSetup.colors || {},
})

fs.writeFileSync(resolve(__dirname, config.destinationPath), JSON.stringify(theme))