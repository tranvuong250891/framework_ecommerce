import { compose, pipe } from "lodash/fp"

console.log(compose())

let input = "     Javascript  "
let output = "<div>" + input.trim() + "</div>"

const trim = str => str.trim()
const wrapInDiv = str => `<h1> ${str}</h1>`
const toLowerCase = str => str.toLowerCase();

const transform = compose(wrapInDiv, toLowerCase, trim)
transform(input)



const result = wrapInDiv(toLowerCase(trim(input)))

