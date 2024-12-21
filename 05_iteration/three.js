// for of

 const arr=[1,2,3,4,5];
for (const num of arr) {
    // console.log(num)
}

const str="Rahul"

for (const st of str) {
    // console.log(st)
}

//Maps

const map=new Map();

map.set('IND','India')
map.set('UK','United Kingdom')
map.set('FR','France')
map.set('USA','United States of America')

// console.log(map)

for (const [key, value] of map) {
    // console.log(key, ':-' ,value)
    
}

const myGame={
    "game1":"free fire",
    "game2":"car racing",
    "game3":"hill climb"

}

for (const [key,value] of myGame) {
    console.log(key, ':-' ,value)
}