const marvelHeros=['Spiderman','Thor',"Ironman"];

const dcHeros=['Superman','flash',"Batman"];


// marvelHeros.push(dcHeros);

// console.log(marvelHeros);

// const allHeros=marvelHeros.concat(dcHeros);

// console.log(allHeros);

// const allNewHeros=[...marvelHeros,...dcHeros];

// console.log(allNewHeros);


const another_array=[1,2,3,4,[3,6,8],4,[4,5,6,4,[4,3,1]]];

const real_another_array=another_array.flat(Infinity)

// console.log(real_another_array)

// console.log(another_array)

// console.log(Array.isArray("Rahul Kumar"))

// console.log(Array.from("RahulKumar"))

// console.log(Array.from({name:"Rahul Kumar"}))

const score1=303
const score2=900
const score3=800

console.log(Array.of(score1,score2,score3))