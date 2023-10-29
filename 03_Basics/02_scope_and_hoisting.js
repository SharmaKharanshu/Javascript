// scope 
//child can take parent fxn variable 

//Hoisting-> Moving delaration to top

// 1. Normal fxn declaration
//We can call this type before defining
addone(5);   
function addone(num){
    return num+1;
}


//2. Fxn as expression
//Note We can't call fxn before defining in this fxn as expression, it will give error
addTwo(5);
function addTwo(num){
    return num+2;
}

