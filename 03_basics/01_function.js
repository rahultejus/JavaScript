function sayHello(){
    console.log("Hello world!");
    
}

// sayHello()

// function addTwoNumbers(num1,num2){

//     console.log(num1+num2)

// }


// function addTwoNumbers(num1,num2){

//     const res=num1+num2;
//       return res;
//     // return num1+num2;
//     // console.log(num1+num2)

// }

// addTwoNumbers(2,"a")
// console.log(addTwoNumbers(2,20))

function userLogin(username){
    // if(username===undefined){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(userLogin("Rahul"))
// console.log(userLogin())

function calculateCartPrice(val1,val2,...num){    // rest operator
    return num
}

// console.log(calculateCartPrice(200,490,400,500,900))

// const user={
//     username:"rahul",
//     price:449
// }

// function handleUser(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
// }

// console.log(handleUser(user))
// console.log(
//     handleUser,{
//     username:"rahul",
//     price:3949
// })

// handleUser({
//     username:"rahul",
//     price:840
// })

const myNewArray=[200,300,500,800]

function returnSecondValue(getArray){

    return getArray[3]
}
console.log(returnSecondValue(myNewArray))