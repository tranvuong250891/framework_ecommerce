import { compose, pipe } from "lodash/fp";
import { Map } from 'immutable'
import { produce } from 'immer'
import { reduce, update } from "lodash";
import { reducer, store } from "./ReduxTutorial"
import { BUG_REMOVE, BUG_ADD } from "./ReduxTutorial/actionType"
import { bugAdded } from './ReduxTutorial/actions'

//REDUX
store.dispatch(bugAdded("bug 1"))

console.log(store.getState())





let updated
let input = "   Javascript    "
let output = "<h1>" + input.trim() + "</h1>"
const trim = str => str.trim()
const toLowerCase = str => str.toLowerCase()


/**
 * wrap
 * @param {string} type - kieu the trong html h1, span, div...
 * @param {string} str - noi dung ben trong the (content Text)
 * @returns {string} tao ra 1 the element
*/
const wrap = type => str => `<${type}>${str}</${type}>`
// hai ham se tuong duong nhau result = transform 
const result = wrap('h1')(toLowerCase(trim(input)))
const transform1 = compose(wrap('h1'), toLowerCase, trim)
// const transform2 = pipe(trim, toLowerCase, wrap)
// console.log('pipe: ', transform2(input))
// console.log('result: ', result)
// console.log('composer: ', transform1(input))


/*
    # Immutability (khong thay doi)
        1. uu diem : kiem soat su thay doi , dong thoi, du doan
        2. khuyen diem : hieu suat thap vi khoi tao bien su luu lai va khong xoa di
*/
let name = "Mosh"
let newName = name.toLocaleLowerCase()
const book1 = {}
let book2 = {}
book1.title = "tieu de trang sach"
book2.title = "tieu de trang sach"

// console.log('const : ', book1)
// console.log('let : ', book2)

const person = {
    name: "John",
    addr: {
        coutry: "USA",
        city: "Cali"
    },
    learn: ['javascript', 'php']
}
const update1 = Object.assign({}, person, { name: "Bob", age: 30 })
const update2 = {
    ...person,
    name: "Mathew",
    learn: [...person.learn, 'java']
}
/* 
=>   
update2 = {
        name: "John",
        addr: {
            coutry: "USA",    
            city: "Cali"
        }, 
        name: "Bod"

    }
*/
update2.addr.city = "New York"
// thay doi dong thoi person va update1, update2

// console.log("person: ", person)
// console.log('update1: ', update1)
// console.log('update2:', update2)

const numbers = ['a', 'b', 'c', 'd'];

//Adding
const index = numbers.indexOf('b')
const added1 = numbers.slice(0, index)
const added2 = [...numbers.slice(0, index), 'd', ...numbers]
const numberFiller = numbers.filter(n => n !== 'b')
// console.log(numberFiller)
// console.log('index:', index)
// console.log('numbers:', numbers)
// console.log('added1:', added1)
// console.log('added2:', added2)


/*
    Enforcing Immutability
        1. Immutable
        2. Immer
        3. Mori
*/

let book = Map({ title: "harry potter" });
function publish(book) {
    return book.set('isPublished', true)

}


// console.log('book: ', book.get('title'))
// console.log('book: ', publish(book).toJS())

// Immer
book = { title: "harry potter" }

publish = (book) =>
    produce(book, draftBook => {
        draftBook.isPublished = true
    })

updated = publish(book)
// console.log(updated)
