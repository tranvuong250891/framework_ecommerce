export default ({ elName, attrs, classNames }) => {
    // console.log(elName, attrs, classNames)
    const El = document.createElement(elName ?? 'div')
    attrs && Object.keys(attrs).forEach(attrName => {
        El.setAttribute(attrName, attrs[attrName])
    })
    classNames && classNames.forEach(className => {
        El.className += className + " "
    })
    // console.log(El)
    return El
}
