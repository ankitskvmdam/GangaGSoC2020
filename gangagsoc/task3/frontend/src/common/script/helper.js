const setCSS = (element, property, value) => {
    element.style[property] = value;
}

const setElementHeightToWindow = (element) => {
    const window_height = window.innerHeight + 'px';
    setCSS(element, "height", window_height);
}

const setELementWidthToWindow = (element) => {
    const window_width = window.innerWidth + 'px'
    setCSS(element, "width", window_width)
}


export {
    setCSS,
    setELementWidthToWindow,
    setElementHeightToWindow
}