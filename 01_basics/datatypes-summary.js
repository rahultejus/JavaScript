//  Primitive

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
    name: "rahul",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// console.log(anotherId);


// https://262.ecma-international.org/5.1/#sec-11.4.3



// *********************** Memory use ***************************

//  Stack(Primitive)  Heap(Non Primitive)


let userName="rahul@google.com"
let anotherUserName=userName;
console.log(userName)
console.log(anotherUserName)

anotherUserName="rahulkumar@facebook.com"
console.log(anotherUserName)
console.log(userName)


let userOne={
    email:"rahul9373@meta.com",
    upiId:"89038364@ybl"
}

let userTwo=userOne;
userOne.email="rahul7777@oracle.com"

console.log(userOne.email)
console.log(userTwo.email)