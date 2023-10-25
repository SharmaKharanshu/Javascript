//toPrecision -> it precise upto given value and round of the rest 
const otherNumber=123.8966
console.log(otherNumber.toPrecision(3));


//toLocalString
//by default -> mark according to US standrd 
//('en-IN') -> marking according to India standard
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));


//-----------------MATHS----------------
console.log(Math); //it gives object of math type
console.log(Math.abs(-4));   // it convert in positive 
console.log(Math.round(4.6)); // convert it to 5.
console.log(Math.ceil(4.2));    // jara sa bhi 4 se jyada then choose top
console.log(Math.floor(4.9));   //it gives 4

//random
console.log(Math.random()); //value between 0 and 1.
console.log(Math.random()*10); //value between 0 and 10
console.log((Math.random()*10)+1); //to avoid 0,bcz example in dice game we want value from 1.

//random -> but in range min=10, max=20;
//-------------------------------------
const min=10;
const max=20;
console.log(((Math.random()*(max-min)+1))+min)  //+1 to avoid 0, +min to get atleast min