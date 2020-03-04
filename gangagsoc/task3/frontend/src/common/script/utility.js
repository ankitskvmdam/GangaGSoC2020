import  * as localStorageConstants from "./local-storage-constants"
import * as themeConstants from "./theme-constants"
import * as helper from "./helper"
import * as IDs from "./component-ids"

const setTheme = () => {
    let theme = window.localStorage.getItem(localStorageConstants.THEME)

    if (theme == null){
        theme = themeConstants.LIGHT
        window.localStorage.setItem(localStorageConstants.THEME, theme)
    }
    
    document.body.setAttribute("class", theme)
}

const setRootDivDimensions = () => {
    const rootDiv = document.getElementById(IDs.rootDivId)
    helper.setElementHeightToWindow(rootDiv)
    helper.setELementWidthToWindow(rootDiv)
}

export {
    setTheme,
    setRootDivDimensions
}