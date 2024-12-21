const coding=['javascript', 'css', 'html', 'python']

// coding.forEach( function(value){
//     console.log(value)
// })


coding.forEach((value)=>{
    // console.log(value)
})

function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe);


coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"C++",
        languageFileName:"cpp"
    },

]

myCoding.forEach(item=>{
    console.log(item.languageName)
})