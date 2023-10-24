/*
primitive/Non-primitive

primitive=number,string,boolean,null,undefined,symbol (7)
    Stored in stack memory used-> Always give copy


Non-primitive=Array,object,function 
    Stored in heap memory -> Always give reference


*/
let age=24;
console.log(typeof(age)); //number

console.log(typeof(null)); // object    (IMPORTANT)

console.log(typeof(undefined)); // undefined