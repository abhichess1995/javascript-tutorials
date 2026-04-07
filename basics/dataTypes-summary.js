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

/******************************************************** */
// Primitives are immutable, meaning their values cannot be changed. When you assign a primitive value to a variable, it creates a copy of that value. If you change the value of one variable, it does not affect the other variable.

let a = 10
let b = a // b is now a copy of a
a = 20 // changing a does not affect b
console.log(a); // 20
console.log(b); // 10

// Non-primitives are mutable, meaning their values can be changed. When you assign a non-primitive value to a variable, it creates a reference to that value. If you change the value of one variable, it affects the other variable because they both reference the same object in memory.

let obj1 = { name: 'John' }
let obj2 = obj1 // obj2 is now a reference to obj1
obj1.name = 'Jane' // changing obj1 also changes obj2
console.log(obj1.name); // Jane
console.log(obj2.name); // Jane

// To create a copy of a non-primitive value, you can use methods like Object.assign() for objects or the spread operator for arrays.

let obj3 = { name: 'John' }
let obj4 = Object.assign({}, obj3) // creates a copy of obj3
obj3.name = 'Jane' // changing obj3 does not affect obj4
console.log(obj3.name); // Jane
console.log(obj4.name); // John

let arr1 = [1, 2, 3]
let arr2 = [...arr1] // creates a copy of arr1
arr1.push(4) // changing arr1 does not affect arr2
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3]