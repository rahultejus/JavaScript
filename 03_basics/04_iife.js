// (IIFE ) Immediately Invoked Function Expression

(function user(){    // named IIFE
    console.log("This is user section")
})();

(()=>{
    console.log("This is anonymous function")
})();   // there is must to use ; otherwise it doesn't know from where to where we have to execute this function


((user)=>{
    console.log(`THe user name is ${user}`)
})('Rahul')



