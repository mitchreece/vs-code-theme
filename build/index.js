const fs = require('fs')
const { resolve } = require('path')
const config = require('./build.config')
const {colors, tokenColors} = require(config.inputPath)
const theme = require(config.destinationPath)

Object.assign(theme, {
    colors,
    tokenColors,
})

fs.writeFileSync(resolve(__dirname, config.destinationPath), JSON.stringify(theme))