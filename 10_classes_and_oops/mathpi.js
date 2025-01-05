const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor)

// console.log(Math.PI)
// Math.PI=9
// console.log(Math.PI)

const cherry={
    name:"cherry",
    price:500,
    isAvailable:false,

    isReady:function(){
        console.log("cherry is not ready to eat")
    }

}

// console.log(Object.getOwnPropertyDescriptor(Math,"PI"))
// // console.log(cherry)
// Object.defineProperty(cherry,'name',{
//     writable:false,
//     enumerable:false,
//     value:"rahul"
// })
// console.log(Object.getOwnPropertyDescriptor(cherry,"name"))

// for (const [key,value] of Object.entries(cherry)) {
//     if(typeof value!=='function'){
//         console.log(`${key}: ${value}`)
//     }
// }

