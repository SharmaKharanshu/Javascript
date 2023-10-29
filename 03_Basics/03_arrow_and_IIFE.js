const user={
    username:"hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
    }
}
//when you want to refer to current context -> this 

user.welcomeMessage()

//node environment this
console.log(this); //-> it gives empty Object
// window k andar this-> it gives window as object


//Normal to arrow fxn conversion
const greet=function(){
   console.log("hi"); 
}

const greet2=()=>{
    console.log("hi"); 
 }

 //more arrow fxn
//  const addTwo=(num1,num2)=>{
//     return num1+num2;            // curly braces return mandatory
//  }

 const addTwo=(num1,num2)=>(num1+num2) // No curlt braces no return needed it automatically interpret and return

 console.log(addTwo(2,3));

 //IIFE
 //1. IMMEDIATELY INVOKED HOJAYE
 //2. TO STOP POLLUTION FROM GLOBAL SCOPE
 (function chai(){
    console.log('DB CONNECTED');
 })()

//  ()-> FXN KI DEFINATION
//  ()->  EXECUTION CALL

// NOTE: when we're using 2 iife then mandatory to put ; after 1st iife
