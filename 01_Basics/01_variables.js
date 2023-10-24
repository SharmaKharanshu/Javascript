const account =12432;
let accountEmail="kharanshu@google.com"
city="gurgaon"  // In js no need to define it type, but [Bad practice]
let accountState; // defined variable with no value has initial value of undefined.
console.table([account,accountEmail,city,accountState]); // table-> console multiple variables

/*
1.  const can't be reassign
2.  var/let 
    var -> fxn scoped(Globally) [Parent fxn me kahi bhi access kr skte hai].
3   var add itself to window object[data breach] let/const doesn't
    type window in console youll get the data of var[Bad practice]
*/

function abcd(){
    for(var i=1;i<12;i++){
        console.log(i);
    }
    console.log(i); //it will work, using i in Parent fxn abcd [Bad Practice] 
}


