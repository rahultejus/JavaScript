const user={
    username:"Rahul kumar",
    price:899,
    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to our website`)
        console.log(this)
    }
}

// user.welcomeMessage()

// user.username ="vivek"

// user.welcomeMessage()

// console.log(this
// )  // the current context of global this in node is {} but in brower it will be window


// function user1(){
//     let username="rahul"
//     console.log(this.username)   // this can only be used inside a object , not inside a funtion
// }

// user1()

const printUser1=function (){
    let username="rahul"
    console.log(this.username)   

}

// printUser1()

const printUser= ()=>{
    let username="rahul"
    console.log(this)   // this can only be used inside a object , not inside a funtion
}

// printUser()

// const addTwoNumbers=(num1,num2)=>{
//     return num1+num2
// }

// console.log(addTwoNumbers(3,4))

// const addTwoNumbers1=(num1,num2)=>num1+num2   // Implicit return 
// const addTwoNumbers1=(num1,num2)=>(num1+num2)   // Implicit return 
const addTwoNumbers1=(num1,num2)=>({username:"rahul Kumar"})   // Implicit return 


console.log(addTwoNumbers1(99,48))
