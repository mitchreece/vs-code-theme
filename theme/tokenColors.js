const {colors} = require('@mitchreece/theme-variables')

module.exports = [
    {
        name: "Comments",
        scope: [
            "comment.block",
            "comment.line",
        ],
        settings: {
            foreground: `${colors.secondary}85`,
            fontStyle: 'italic',
        }
    },
]