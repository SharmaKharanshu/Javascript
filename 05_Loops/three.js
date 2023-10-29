//ARRAY SPECIFIC LOOP
//for of Loop

const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}

// for of used in -> arr, strings,object also
const greetings='hello'
for (const i of greetings) {
    console.log(i);
}

//Maps -> its an object having ky value pair, remember the order of insertion (No dupicate value)
const map=new Map();
map.set('IN',"india")
map.set('Fr',"france")
map.set('USA',"united state of america")
for (const key of map) {   //[key,value] -> destructing also allowed
    console.log(key);
}