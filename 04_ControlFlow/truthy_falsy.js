//truthy="0","false," ",[],{},function(){ }
//falsy = false,0,null,undefined,NaN,""


//Nullish coalescing operator(??): null undefined
let val1= 5??10;
console.log(val1);
// Mostly used in db -> if getting null/undefined then act accordingly or if getting value then pass that value
let val2 =null ?? 10;
console.log(val2);