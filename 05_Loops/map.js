const myNumber = [1,2,3,4,5,6,7,8]

const newNums =myNumber.map((num)=>num+10)
console.log(newNums);

//chaining
const newNums1=myNumber
                .map((num)=>num*10)
                .map((num)=>num+1)



//reduce fxn