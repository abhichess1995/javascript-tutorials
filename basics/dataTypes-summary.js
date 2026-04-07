// Data types
//Primitives: 7 types - string, number, boolean, null, undefined, symbol, bigInt
const name = 'John'
const score = 50
const scoreValue = 50.3
const isLoggedIn = false
const outsideTemp = null
let userEmail
const id = Symbol('1234')
const anotherId = Symbol('1234')
console.log(id === anotherId); //false. Each symbol is unique, even if they have the same description.

const bigNumber = 9007199254740991n

//Non-primitives or Reference types: object, array, function

let person = {
    name: 'John',
    age: 30,
    isStudent: false
}

let numbers = [1, 2, 3, 4, 5]

function greet() {
    console.log('Hello!')
}

