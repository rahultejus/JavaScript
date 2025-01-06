function User(username,password){
    this._username = username;
    this._password = password;

    Object.defineProperty(this,'username',{
        get:function(){
            return this._username.toUpperCase();
        },
        set:function(value){
        this._username = value;
        }
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase();
        },
        set:function(value){
        this._password = value;
        }
    })

}

const user1=new User("rahul","23kfhhd")
console.log(user1.username)
console.log(user1.password)