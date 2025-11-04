const greeting = (name:string)=>{
    console.log("Greeting function called "+name);
    return `Hello, ${name}!`
} 
greeting("Ujval");

const sum = ( a:number ,b:number):number =>{
    return a+b;
}
const ans:number =sum(2,3);




 // Interface Example
interface User{
    name:string;
    age:number;
    email?:string;
}

const isLegal = (user :User):boolean =>{
    return user.age >= 18;
}   
const legalStatus:boolean = isLegal({name:"Ujval",age:20});





// Function as parameter Example
const func = (fn:(name:string)=>string) =>{
    setTimeout(()=>{fn("Ujval")},5000); 
}
func(greeting)





console.log(greeting("Ujval"));
console.log(`Sum is: ${ans}`);
console.log(`Is legal: ${legalStatus}`);
