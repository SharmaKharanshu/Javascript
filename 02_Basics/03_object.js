//2 ways 

//1. through constructor which gives singleton
// Object.create

//2. through literals
const JsUser={
    name:"kaye",   // BTS name="name"
    age:18,
    location:"Jaipur",
    email:"kharanshu@google.com",
    lastLoginDays:["Monday","Wednesday"]
}

//Access object

//1. Via Dot
console.log(JsUser.email);

//2. Via Square Notation
console.log(JsUser["email"]);
//Advantage: Suppose 
const JsUser1={
   "full name": "kharanshu sharma"  
}
//NOTE: there is no way we can access this via . there access via brackets introduced


//Access Symbol
const mySym=Symbol("key1")
const JsUser2={
    "full name": "kharanshu sharma"  ,
    [mySym]:"mykey1"
 }

 console.log(JsUser[mySym]);

//value Overwrite
JsUser.email="kharanshu@adobe.com"
console.log(JsUser.email);

//object freeze-> so that no one can change it
// Object.freeze(JsUser)
// JsUser.email='kharanshu@sds.com'

//Object with function
JsUser.greetings=function(){
    console.log('hello');
}

console.log(JsUser.greetings());  //greetings only return function, greeeting() execute function
console.log(JsUser);

//refer same object -> this keyword
JsUser.greetings2=function(){
    console.log(`hello ${this.name}`);
}
console.log(JsUser.greetings2());
