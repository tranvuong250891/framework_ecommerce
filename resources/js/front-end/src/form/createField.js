import createEl from "../lib/createEl"

export const createField = ({ name, value, classNames }) => {
    const configField = {
        value: value,
        attrs: { name: name },
        classNames: classNames.push('field')
    }
    const fieldEl = createEl(configField)


    return fieldEl
}
