const myObject={
    js: "javascript",
    cpp: "C++",
    rb: "ruby"
}

//for in loop for object            //for in gives key, for of gives value
for (const key in myObject) {
   console.log(myObject[key]);
}

//for in on array
const myArray=[1,2,3,4]
for (const key in myArray) {
    console.log(myArray[key]);
}
