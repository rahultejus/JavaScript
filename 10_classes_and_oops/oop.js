// const user={
//     username:"Rahul",
//     loginCount:9,
//     signedIn:true,
//     getUserDetails:function(){
//         // console.log("This is user details")
//         console.log(`username is ${this.username}`)
//     }
// }
// console.log(user.username)
// console.log(user.getUserDetails())

function User(username,loginCount,signedIn){
        this.username=username;
        this.loginCount=loginCount;
        this.signedIn=signedIn;
        this.greeting=function (){
            console.log(`welcome ${this.username}`);
        }
    // return this;
}

const userOne= new User("Rahul",4,true)
const userTwo= new User("Ramesh",9,false)


// console.log(userOne)
// console.log(userOne.constructor)
// console.log(userTwo.constructor)
// console.log(userTwo)

console.log(userOne instanceof User )
console.log(userTwo instanceof userOne)
