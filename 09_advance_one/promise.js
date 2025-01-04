const promiseOne=new Promise(function(resolve,reject){
    // Do an async task
    // DB call, cryptography, network 
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000) 
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is completed");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 completed")
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username: "rahul",email: "tejusrahul03@gmail.com"})},1000)

})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFourth=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
        resolve({username: "rahul",password: "12345"})
        }
        else{
         reject('ERROR:Something went wrong!')
        }
    },1000)
})

promiseFourth.then((user)=>{
    console.log(user)
    return user.username;
}).then(function(username){
       console.log(username)
}).catch(function(err){
    console.log(err)
}).finally(()=>{
    console.log("Promise is either resolved or rejected!")
})

const promiseFive=new Promise(function(resolve, reject){

    setTimeout(function(){
        let error=true;
        if(!error){
        resolve({username: "Decock",password: "12345"})
        }
        else{
         reject('ERROR:Decock went wrong!')
        }
    },1000)

})

async function consumePromiseFive(){

    try {
        const response=await promiseFive
     console.log(response)
    } catch (error) {
        console.log(error)
    } 
}

// consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response= await fetch("https://jsonplaceholder.typicode.com/users")
//         // console.log(response)
//         const data= await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:",error)
//     }

// }
// getAllUsers()


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
   return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error) {
    console.log("E:",error)
})