class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email =email;
        this.password=password;
    }
    addCourse(){
        console.log(`New course is added by ${this.username}`)
    }
}

const teacher=new Teacher("Rahul","rahul@gmail.com","12345")
teacher.addCourse()
teacher.logMe()

const user1=new User("This is user1")
user1.logMe()

console.log(teacher===user1)