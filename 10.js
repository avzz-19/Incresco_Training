let acc=1;
let cur=1;
function multiply() {
   let args=Array.from(arguments);
   return args.reduce(function(acc,cur){
       return acc*cur;
   })
}
console.log(multiply(2,6,8,10));


//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