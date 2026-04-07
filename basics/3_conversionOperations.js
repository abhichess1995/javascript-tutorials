let score = "50sdss"
//console.log(typeof score) //string

let valInNumber = Number(score)
//console.log(typeof valInNumber) // number
//console.log(valInNumber) //NaN

//console.log("------------------------")

let score2 = undefined
//console.log(typeof score2) //undefined

let valInNumber2 = Number(score2)
//console.log(typeof valInNumber2) // number
//console.log(valInNumber2) //NaN

//console.log("------------------------")

let score3 = null
//console.log(typeof score3) //object

let valInNumber3 = Number(score3)
//console.log(typeof valInNumber3) // number
//console.log(valInNumber3) //0

//console.log("------------------------")

let score1 = true
//console.log(typeof score1) //boolean

let valInNumber1 = Number(score1)
//console.log(typeof valInNumber1) // number
//console.log(valInNumber1) //1 if true , 0 if false
//console.log("------------------------")

/*
"33" => 33
"33abc" => NaN
true => 1 ; false => 0
*/


let isLoggedIn = 1
let isLoggedIn1 = 0
let isLoggedIn2 = "abhi"
let isLoggedIn3 = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)

//console.log(booleanIsLoggedIn) // true
//console.log(booleanIsLoggedIn1) // false
//console.log(booleanIsLoggedIn2) // true
//console.log(booleanIsLoggedIn3) // false

/*
1 => true
0 => false
"" => false
"fshdfh" => true
*/

let someNumber = 33
let stringNumber = String(someNumber)
//console.log(stringNumber) // 33
//console.log(typeof stringNumber) // string


/************** Operations   *****************/

let val = 3
let negVal = -val
//console.log(negVal) // -3

/*
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/3)
console.log(2**3)
console.log(2%3)
*/

let str1 = "Hello"
let str2 = " Abhi"
let str3 = str1 + str2
//console.log(str3) // Hello Abhi

// console.log(1 + "1") // 11
// console.log("1" + 1) // 11
// console.log(1 + 1 + "1") // 21 
// console.log("1" + 1 + 1); // 111 because "1" + 1 => "11" + 1 => "111"

// ++x and x++ both are used to increment the value of x by 1. The difference between them is in the order of evaluation:

// ++x (pre-increment): The value of x is incremented first, and then the new value is returned.
// x++ (post-increment): The current value of x is returned first, and then x is incremented.

let x = 5
// console.log(++x) // 6
// console.log(x) // 6

let y = 5
// console.log(y++) // 5
// console.log(y) // 6
