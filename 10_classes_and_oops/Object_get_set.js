// Older syntax 

const User={
    _email:"rahul@google.com",
    _password:"384kdj",
    get email(){
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value;
    }
}

const user1=Object.create(User)
console.log(user1.email)