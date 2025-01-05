function SetUsername(username){
    //DB call
    this.username = username;
    // console.log("called")
}

function createUser(username,email,password){
    SetUsername.call(this,username)
    this.email = email
    this.password = password
}

const user1=new createUser("Rahul","rahul@google.com","12345")
console.log(user1)