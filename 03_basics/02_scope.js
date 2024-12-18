
let a =40
const b=90
var c=300

if(true){
    let a=10
    const b=30
    var c=200
    // console.log("INNER value:",a)
    // console.log("INNER value:",b)
    // console.log("INNER value:",c)
}

// console.log("OUTER value:",a)
// console.log("OUTER value:",b)
// console.log("OUTER value:",c)

function one(){
    const username="Rahul Kumar"

    function two(){
        const website="youtube.com"
        console.log(username)
    }
    // console.log(website)
  console.log("THis is function One")
    two()
}
// one()

if(true){
    const username="Rahul Kumar"
    if(username =="Rahul Kumar"){
        const website=" youtube.com"
        // console.log(username+ website)
    }
    // console.log(website)
}
// console.log(username)

//**************************** Intresting *******************//


console.log(addOne(8))
function addOne(num){
    return num + 1
}


addTwo(7)        // it's not allowed because to access a function before it's  initalized which is put in a variable.
const addTwo=function(num){
    return num + 2
}

