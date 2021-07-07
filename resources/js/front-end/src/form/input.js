import './input.scss'

export const Input = ({ value, label }) => {
    const Input = document.createElement('div')
    Input.classList.add("field")
    console.log(label)
    Input.innerHTML = `
        <input value="${value ?? ''}" placeholder=" " />
        <label>${label}</label>
        
    `
    return Input
}