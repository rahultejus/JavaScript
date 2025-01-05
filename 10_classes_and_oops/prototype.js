
  const names="rahul     "
//   console.log(names.length)
//   console.log(rahul.truelength)
//   console.log(rahul.trim().length)
  
  let myHeros=["thor","batman","spiderman"]
  
  let heroPower={
    thor:"hammer",
    batman:"reflexes",
    spiderman:"sling",
  
    getSpiderPower:function(){
      console.log(`The spiderman power is ${this.spiderman}`);
    }
  }
  
  // console.log(heroPower.getSpiderPower())
  
  Object.prototype.rahul=function(){
    console.log(`Rahul is present in all objects`)
  }
  
  // heroPower.rahul();
  // myHeros.rahul();
  
  Array.prototype.hello=function(){
    console.log("Hello send to everyone by Rahul")
  }
  
  // myHeros.hello();
  // heroPower.hello()   // because the power is given to only Array this cann't be accessed by Object so it will give error
  
  // Inheritance
  
  const User={
    name:'rahul',
    email:'rahul@google.com'
  }

  const Teacher={
     makeVideo:true
  }
  
  const TeachingStaff={
     isAvailable:false
  }
  
  const TAsupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingStaff    // prototypal inheritance
  }

  Teacher.__proto__=User

  //modern syntax
  Object.setPrototypeOf(TeachingStaff,Teacher)

  let anotherUserName="rahulkumar    "

  String.prototype.trueLength=function(){
    // console.log(`${this}`)
    
    console.log(`True length is ${this.trim().length}`);
  }
anotherUserName.trueLength()
"rahul   ".trueLength()