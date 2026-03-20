//Always use "let" keyword as it is block specific.

const accountId = 12345;
let accountEmail = "abhichess@google.com";
var accountPassword = "12345";
accountCity = "Banglore"; // allowed but not at all recommended.
let accountState;

//accountId = 11111 //not allowed
accountEmail = "abhi@google.com";
var accountPassword = "54321";
accountCity = "Mysore";

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);