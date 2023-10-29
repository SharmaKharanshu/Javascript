//for Each loop-> Higher order fxn
const coding=["js","cpp","java","python"]
coding.forEach( function (item){     //forEach -> takes callback fxn (Normal fxn) as argument,
    console.log(item);                 //callback fxn ka name nahi hota
})

//arrow fxn with for each
coding.forEach( (item)=>{  
    console.log(item);     
})      

//callback fxn ki jagah we can give reference also of a fxn
function printMe(item){
    console.log(item);
}

coding.forEach(printMe); //giving reference, dont execute it 

coding.forEach( (item, index,arr)=>{   //index bhi aata hai plus full array also
    console.log(item,index,arr);     
}) 

//iterate over array having object
const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})