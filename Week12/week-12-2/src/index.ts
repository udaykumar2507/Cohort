// interface User {
//   age : number,
//   name : string,
// }

// function sumOfAge(user1:User , user2:User):number{
//     return user1.age +user2.age;
// }

// const age = sumOfAge({
//    age : 21,
//    name : "Ujval"
// },{
//    age :18,
//    name : "Uday"
// });

// console.log(age);

// PICK AND PARTIAL
interface User {
    id : string,
    age : number,
    name : string,
    email : string,
    password : string
}

type UpdatedProps = Pick <User, 'name' | 'age' |'email'>

type UpdatePropsOptional = Partial <UpdatedProps> // making all properties optional   

  

function updateuser (updateduser : UpdatedProps){
    updateduser.name = 'Ujval';
    updateduser.age = 21;
    updateduser.email = 'uk25072004@gmail.com';
    console.log(updateduser);
}

updateuser({
    name : 'Uday',
    age : 18,
    email : 'ujval@gail.com'
});




// READONLY

interface user1 {
    readonly id : string,
    readonly name : string,
} 

const guy : user1 = {
    id : "1234",
    name : "Uday",
}

//guy.id = "345"

// RECORD 

type UserAge = {
    [key:string] : number
}

type UserAge1 = Record <string,{age:number,name:string}>;

const age : UserAge1 = {
    "Uday":{age:18,name:"Uday"},
    "Ujval" :{ age:21,name:"Ujval"},
}

// MAP

type USER = {
    name : string,
    age :number,
    email : string,
}

const users = new Map<string,USER>()

users.set("uday@123",{name:"Ras",age:30,email:"ras@gmail.com"})
users.set("uday@12",{name:"Ras1",age:30,email:"ras2@gmail.com"})

const use_r = users.get("uday@123");

console.log(use_r);

users.delete("uday@12")


//  EXCLUDE 

type EventType = 'click' | 'mousemove' | 'scroll';
type ExcludeEvent = Exclude <EventType,'scroll'>;

const handleEvent = (event : ExcludeEvent) => {
    console.log(`Handling Event: ${event}`)
}

//handleEvent('scroll')
handleEvent('click')