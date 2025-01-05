class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username:${this.username}`)
    }
    static createId(){
        return `12345`
    }
}

const rahul=new User("rahul")

// console.log(rahul.createId())        //A static method belongs to the class itself, not to any instance of the class. 
                                        // It cannot access instance properties or methods (this.username) but can perform
                                        //  operations that do not rely on instance data.

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const teacher=new Teacher("rahul","rk89@gmail.com")
//  teacher.logMe()
 teacher.createId()  // because of static method it cann't be accessed by child class