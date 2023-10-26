// array = its an object having collection of multiple items
const arr=[2,331,1,46,7,'ads']


// JS array are resizable
// array copy operation create  shallow copy (Whz share the same reference point)

//array method
arr.push(6)
arr.push(7)
arr.pop()
console.log(arr);

//unshift put value at the start   //shift put at the end of array just like push
arr.unshift(9)    //put extreme load on computer bcz we've to shift the entire array
console.log(arr);


//includes -> boolean result
console.log(arr.includes(10));

//slice, splice
console.log("A ",arr);
const arr2=arr.slice(1,3);
console.log(arr2);
console.log("B ",arr);

//splice
const arr3=arr.splice(1,3);  //IMPORTANT splice includes last value also 7 altered the original array also
console.log(arr3);

