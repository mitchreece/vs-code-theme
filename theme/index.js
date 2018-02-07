const { colors } = require('@mitchreece/theme-variables')

module.exports = {
    colors: {
        "badge.background": colors.secondary,
        "badge.foreground": colors.fontLight,
        "activityBarBadge.background": colors.secondary,
        "activityBarBadge.foreground": colors.fontLight,
        
        "titleBar.activeBackground": colors.primaryDark,
        "titleBar.activeForeground": `${colors.secondary}9C`,
        "titleBar.inactiveBackground": colors.primary,

        "activityBar.background": colors.primary,

        "sideBar.background": colors.primary,

        "editor.background": colors.primary,
        
        "editorGroupHeader.tabsBackground": colors.primary,
        "tab.activeBackground": colors.primary,
        "tab.activeForeground": colors.secondary,
        "tab.border": colors.primary,
        "tab.inactiveBackground": colors.primary,
        "tab.inactiveForeground": `${colors.fontLight}CC`,

        "statusBar.background": colors.primary,
        "statusBar.foreground": colors.secondary,
        "statusBarItem.hoverBackground": colors.primaryDark,
        "statusBarItem.prominentHoverBackground": colors.fontLight,
        "statusBar.noFolderBackground": colors.primaryDark,
        "statusBar.debuggingBackground": colors.secondary,
        "statusBar.debuggingForeground": colors.fontLight,
    }
}