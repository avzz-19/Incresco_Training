let acc=1;
let cur=1;
function multiply() {
   let args=Array.from(arguments);
   return args.reduce(function(acc,cur){
       return acc*cur;
   })
}
//addition
console.log(multiply(2,6,8,10));
function add(){
    let args=Array.from(arguments);
    return args.reduce(function(acc,cur){
    return acc+cur;})
}
console.log(add(2,5));
