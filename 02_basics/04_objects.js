const tinderUser=new Object();  //===>Singleton Object

// const tinderUser = {}    //===>  Non Singleton Object

tinderUser.name="rahul Kumar"
tinderUser.email="rahul.karma@gmail.com"
tinderUser.isLoggedIn=true


// console.log(tinderUser)

const regularUser ={
    email:"vishal934@gmail.com",
    fullUserName:{
        userName:{
            firstName:"Rahul",
            lastName:"Kumar"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullUserName.userName.firstName)

const obj1={1:"rahul",2:"aman"}
const obj2={3:"arun",4:"vivek"}
const obj3={5:"vipin",6:"vinay"}

// const obj4={obj1,obj2,obj3}
// const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3}
// console.log(obj4)

const user=[
    {
        id:1,
        email:"user1@gmail.com"
    },
    {
        id:2,
        email:"user2@gmail.com"
    },
    {
        id:3,
        email:"user3@gmail.com"
    },
    {
        id:4,
        email:"user4@gmail.com"
    },
]

// console.log(user[1].email)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course={
    courseName:"Master JavaScript",
    price:"$999",
    instructor:"rahul Kumar"
}
// console.log(course.courseName)

// const {instructor,courseName}=course
const {instructor:inst}=course

console.log(inst)
// console.log(courseName)