let score="33"
typeof(score) //string
let valueInNumber=Number(score);
console.log(valueInNumber);

//case 2
let score1="33abc"
typeof(score1) //string
let valueInNumber1=Number(score1);
console.log(valueInNumber1);   //Nan [Not a number] special type (IMPORTANT)

//case 3 
let score2=null
typeof(score2) //object
let valueInNumber2=Number(score2);
console.log(valueInNumber2);   //Gives 0 in output

//case 1 -> "33" = 33
//case 2 -> "33abc"= Nan
//case 3 -> "null" = 0




//-------------------------------------------------
/* 
BAD PRACTICE CODE 
console.log("1"+2);     12
console.log(1+"2");     12
console.log("1"+2+2);   122
console.log(1+2+"2");   32 (IMPORTANT)
*/
