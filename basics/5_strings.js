const name = "Abhilash"
const repoCount = 50;

//console.log(name + ". " + repoCount + " Value");

//String Interpolation. Best Method
console.log(`My name is ${name.toUpperCase()}. And my repo count is ${repoCount}`);

const gameName = new String("hitman-assasin-creed");
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.__proto__);
//All these above methods wont change the original string value stored in gameName variable. Because of Stack concept. Only copy is received not the reference.

 console.log(gameName.charAt(2));
 console.log(gameName.indexOf("t"));
 
const newString = gameName.substring(0,4); //Doesn't work with negative value
console.log(newString);
const anotherString = gameName.slice(-4,-2); //Works with negative value
console.log(`anotherString is:- ${anotherString}`);

const newStringOne = "     Abhilash      ";
console.log(newStringOne.trimEnd());
console.log(newStringOne.trimStart());
console.log(newStringOne.trim());

const url = "https://www.testing.com/abhilash%20sharma";
console.log(url.replace("%20", "-"));
console.log(url.includes("abhi"))
console.log(url.includes("hello"))

console.log(gameName.split("-")) //Returns an array  