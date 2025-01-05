// ES6

// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//          return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1=new User("rahul","rahul@gmail.com","12345");
// console.log(user1.encryptPassword())
// console.log(user1.changeUsername())

//Behind the scenes

function User(username, email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea=new User("kk","kk@google.com","12345")
console.log(tea.changeUsername())