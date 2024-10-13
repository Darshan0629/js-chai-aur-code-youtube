// basically data types are divided into mainly into two types based on how thay store in memory and how we access them

//  Primitive (call by value)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive) and heap (Non-primitive)

// in stack we share a copy and in heap we share a reference 

let firstName = "Darshan"

let fullName = firstName // share a copy of firstName
fullName = "Darshan Mangrola" // change the fullName

// console.log(firstName);
// console.log(fullName); // fullName is changed but firstName is remains same.

let userOne = {
    email: "darshanmangrola@gmail.com",
    upi: "darshan@bob"
}

let userTwo = userOne // share same reference

userTwo.email = "darshan@gamil.com" // change the email of userTwo

console.log(userOne.email) // email of userOne is also changed bcz both share same reference
console.log(userTwo.email)