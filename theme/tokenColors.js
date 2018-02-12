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
            "entity.other.attribute-name.id",
        ],
        settings: {
            foreground: '#7986CB',
        }
    },
    {
        scope: [
            "entity.name.tag",
            "entity.name.section",
        ],
        settings: {
            foreground: '#C2185B',
        }
    },
    {
        scope: [
            "entity.other.attribute-name",
        ],
        settings: {
            foreground: '#81C784',
        },
    },
    {
        scope: [
            "entity.other.attribute-name.class",
        ],
        settings: {
            foreground: '#FF8A65',
        }
    }
]