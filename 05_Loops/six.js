const coding = ["js","ruby","java", "python", "cpp"]

const values=coding.forEach((i)=>{  //for each don't return anything
    //console.log(item);
    return item;
})

//We want something which can return therefore "FILTER" 
const myNums=[1,2,3,4,5,6,7,8]

const newNums=myNums.filter((item)=>num>4)
console.log(newNums);

//MISTAKE
//const newNums=myNums.filter((num)=>){
//     return num>4;           IMPORTANT Due to scope we have to use return mandatory
// }                            "otherwise filter empty array return krta hai"

//for each needs more logic and more code
const newNums1=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums1.push(num)
    }
})
console.log(newNums1);