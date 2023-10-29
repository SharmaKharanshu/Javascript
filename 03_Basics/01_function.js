function sayMyName() {
    console.log("kaye");
}

//sayMyName -> reference 
//sayMyName() -> Execute


function addTwoNumber(number1,number2){
    console.log(number1+number2);
}

const result=addTwoNumber(3,4)

console.log(result);  //IMPORTANT this result will give undefined bcz result contain whatever is return from function,but function is not returning anything, fxn only contain 1 console no return.


//when we don't know how many argument will come for the function.
//example -> Cart
//REST/SPREAD Operator
function calculateCardPrice(...num1){   //rest Operator 
    return num1; // it gives array
}
console.log(calculateCardPrice(200,400,500));

//object in function
const user={
    username:"hitesh",
    prices:100
}
function handleObject(anyobject){
    console.log(`uUserName is ${anyobject.username} and price is ${anyobject}`);
}

handleObject(user)