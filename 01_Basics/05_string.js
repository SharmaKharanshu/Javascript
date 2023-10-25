const name ="kharanshu"
const repoCount=10

// console.log(name + repoCount + " Value "); // Not good practice

//string Interpolation
console.log(`Hello my name is ${name} and repo count is ${repoCount}`);


const gameName = new String('kaye') // it will give us length property & methods in prototypes.

console.log(gameName[0]); //access 0th key it gives value of 0th key

console.log(gameName.__proto__); // Access prototype plus it will give us a empty object. it not empty we can check that in browser console.

console.log(gameName.length);
console.log(gameName.toUpperCase()); // doesnot change original string 

const newString = gameName.substring(0,4) //it gives a section
console.log(newString);


//slice we can give negative value also
const anotherString =gameName.slice(-8,4)
console.log(anotherString);

//trim -> trim down all the white spaces    // we have trim start/end also 
const newStringOne = "  kaye    "
console.log(newStringOne);
console.log(newStringOne.trim());  // it will trim all the white spaces

//replace -> replace particular part of string into desired string
const url = "https://kharanshu.com/kharanshu%20sharma"
console.log(url.replace('%20','-'))

//convert atring into array based on seperator(-,/,@,etc)
console.log(gameName.split('-'));  