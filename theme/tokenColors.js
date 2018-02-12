const {colors} = require('@mitchreece/theme-variables')

module.exports = [
    {
        name: "Comments",
        scope: [
            "comment",
        ],
        settings: {
            foreground: `${colors.fontLight}65`,
        }
    },
    {
        name: 'Italic',
        scope: [
            "variable.language",
            "comment",
        ],
        settings: {
            fontStyle: 'italic',
        }
    },
    {
        scope: [
            "variable",
            "variable.parameter",
            "variable.function",
            "storage.modifier",
        ],
        settings: {
            foreground: '#B39DDB',
        }
    },
    {
        scope: [
            "storage.type",
            "variable.language",
        ],
        settings: {
            foreground: '#7E57C2',
        }
    },
    {
        scope: [
            "support",
            "keyword.control",
        ],
        settings: {
            foreground: '#BA68C8',
        }
    },
    {
        scope: [
            "constant",
        ],
        settings: {
            foreground: "#EC407A",
        }
    },
    {
        scope: [
            "constant.numeric",
        ],
        settings: {
            foreground: "#3949AB",
        }
    },
    {
        scope: [
            "string",
        ],
        settings: {
            foreground: '#7986CB',
        }
    }
]