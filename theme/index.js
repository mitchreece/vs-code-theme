const { colors } = require('@mitchreece/theme-variables')

module.exports = {
    colors: {
        "badge.background": colors.secondary,
        "badge.foreground": colors.fontLight,
        "activityBarBadge.background": colors.secondary,
        "activityBarBadge.foreground": colors.fontLight,

        "button.background": `${colors.secondary}9C`,
        "button.foreground": colors.primary,
        "button.hoverBackground": colors.secondary,

        "dropdown.background": colors.primaryDark,

        "input.background": colors.primaryDark,
        "input.foreground": colors.secondary,
        "input.placeholderForeground": `${colors.secondary}C1`,
        
        "titleBar.activeBackground": colors.primaryDark,
        "titleBar.activeForeground": `${colors.secondary}9C`,
        "titleBar.inactiveBackground": colors.primary,

        "activityBar.background": colors.primary,
        "activityBar.foreground": colors.fontLight,

        "sideBar.background": colors.primary,
        "sideBarTitle.foreground": colors.secondary,
        "sideBarSectionHeader.background": `${colors.secondary}C1`,
        "sideBarSectionHeader.foreground": colors.primary,

        "editor.background": colors.primary,
        
        "editorGroupHeader.tabsBackground": colors.primary,
        "tab.activeBackground": colors.primary,
        "tab.activeForeground": colors.secondary,
        "tab.border": colors.primary,
        "tab.inactiveBackground": colors.primary,
        "tab.inactiveForeground": `${colors.fontLight}CC`,

        "statusBar.background": colors.primary,
        "statusBar.foreground": `${colors.secondary}9C`,
        "statusBarItem.hoverBackground": colors.primaryDark,
        "statusBarItem.prominentHoverBackground": colors.fontLight,
        "statusBar.noFolderBackground": colors.primaryDark,
        "statusBar.debuggingBackground": colors.secondary,
        "statusBar.debuggingForeground": colors.fontLight,
    }
}