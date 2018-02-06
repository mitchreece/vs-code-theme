const { colors } = require('@mitchreece/theme-variables')

module.exports = {
    colors: {
        "badge.background": colors.secondary,
        "badge.foreground": colors.fontLight,
        "activityBarBadge.background": colors.secondary,
        "activityBarBadge.foreground": colors.fontLight,
        
        "titleBar.activeBackground": colors.primaryDark,
        "titleBar.activeForeground": colors.secondary,
        "titleBar.inactiveBackground": colors.primary,
 
        "statusBar.background": colors.primary,
        "statusBar.foreground": colors.secondary,
        "statusBarItem.hoverBackground": colors.primaryDark,
        "statusBarItem.prominentHoverBackground": colors.fontLight,
        "statusBar.noFolderBackground": colors.primaryDark,
        "statusBar.debuggingBackground": colors.secondary,
        "statusBar.debuggingForeground": colors.fontLight,
    }
}