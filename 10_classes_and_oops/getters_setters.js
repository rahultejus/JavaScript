class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
    get username(){
        return this._username.toUpperCase();
    }
    set username(value){
         this._username=value;
    }

    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password=value;
    }
}

const user1=new User("rahul","djks")
console.log(user1.password)
console.log(user1.username)