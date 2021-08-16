export const groupType = (array = []) => {
    const objectType = {};
    array.forEach(({ name, value }, id) => {
        if (objectType[name]) {
            objectType[name].push(value)
        } else {
            objectType[name] = [value]
        }
    })
    let names = Object.keys(objectType),
        values = Object.values(objectType), html = ``
    names.forEach((name, id) => {
        html += `<div class="show-type-product"><div>${name}</div><div class="value">${values[id].join(' - ')}</div></div>`
    });

    return html
}