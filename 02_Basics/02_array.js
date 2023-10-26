//array can have any type of data string,object, another array also
//example
const arr=[1,2,3]
const arr2=[4,5,6]

// arr.push(arr2)

// console.log(arr); //output [ 1, 2, 3, [ 4, 5, 6 ] ]


//concat ->cobine 2 array and return a new array
const arr3=arr.concat(arr2)
console.log(arr3);      //output [ 1, 2, 3, 4, 5, 6 ]


//spread operator
const arr4=[...arr,...arr2]   //easy to insert 3rd array also [...arr,...arr2,...arr3] 
console.log(arr4); //output [ 1, 2, 3, 4, 5, 6 ]

//flat
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const flat_array=another_array.flat(Infinity); //infinity =how much depth we want to flat, if we dont know the depeth then just put infinity.


console.log(Array.isArray("kaye")); //it check its array or not  
// convert into array
console.log(Array.from("kaye"));
console.log(Array.from({name:"kaye"})); //*IMPORTANT it will return empty array bcz we've to specify either we want array or keys or values

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3)); //output [ 100, 200, 300 ]