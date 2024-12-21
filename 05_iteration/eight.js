const myNumber=[1,2,3,4,5,6,7,8,9]

// const totalValue =myNumber.reduce(function(acc,currVal){
     
//     console.log(`acc:${acc} and currVal:${currVal}`)
//     return acc+currVal
// },0)

// const totalValue = myNumber.reduce((acc,currVal)=>acc+currVal,0)

// console.log(totalValue)

const shoppingCart=[
    {
        itemName:"py course",
        price:999

    },
    {
        itemName:"web dev course",
        price:1999

    },
    {
        itemName:"mobile dev course",
        price:5999

    },
    {
        itemName:"js course",
        price:99

    },
]

const totalCost=shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(totalCost)