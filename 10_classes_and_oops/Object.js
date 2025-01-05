function multiplyBy5(num){
  return num*5;
}

multiplyBy5.power=2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username, score){
  this.username=username;
  this.score=score;
}

createUser.prototype.increment=function(){
  this.score++;
}
createUser.prototype.printMe=function(){
  console.log(`The score is ${this.score}`);
}


// const user1=new createUser("rahul",23);
// const user2=new createUser("yatawar",98);

// user1.printMe()
// user1.increment()
// user1.printMe()