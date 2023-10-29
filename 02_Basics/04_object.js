//const tinderUser=new Object()   //it a singleton object
const tinderUser={}             //Not a singleton object
tinderUser.id="123"
tinderUser.name="sam"

const regularUser={
    email:"abcd@gmail.com",
    fullName:{
        userFullName:{
            firstName:"kaye",
            lastName:"sharma"
        }
    }
}

//access value of nested object
console.log(regularUser.fullName.userFullName.firstName);

//suppose data is coming through Api (OPTIONAL CHAINING)
//console.log(regularUser.fullName?.userFullName.firstName);
//incase full name not existed

//Merge 2 array
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={obj1,obj2}
console.log(obj3); // but it will add both object in obj3 not merge them

const obj4=Object.assign({},obj1,obj2) //it will meerge both array, and  Why {}-> its an optional parameter it shows that add both array and put it in {}. we imagine { as target and other array as source we copied all source to target.}
console.log(obj4);

//more better then assign 
const obj5={...obj1,...obj2};
console.log(obj5);

//syntax for data coming from database
const user=[
    {
        id:1,
        email:"abc@.com"
    },
    {
        id:2,
        email:"abc2@.com"
    },
    {
        id:3,
        email:"abc3@.com"
    },
    
]
user[1].email // access object inside array

//get all key of object -> it return array  IMPORANT
console.log(tinderUser);
console.log(Object.keys(tinderUser));

//DESTRUCTURING OBJECT
const course={
    courseName:"JavaScript",
    price:"999",
    courseInstructor:"kaye"
}

// bar bar course. krke value access looks lame

const {courseInstructor:Ins,courseName}=course;
console.log(courseInstructor);
//console.log(Ins);  // colon : laga k we can use smaller name also
