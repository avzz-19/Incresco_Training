var arr=[];
function fizzBuzz(start, end) {
for(i=start;i<=end;i++){
arr.push(i);
}
for(i=start;i<=end;i++){
   if(arr[i]%3==0)
   {
   if(arr[i]%5==0)
   arr[i]="fizzbuzz";
   else
   arr[i]="fizz";
   }
   else if(arr[i]%5==0)
   arr[i]="buzz";
   }
console.log(arr);
}
fizzBuzz(1,15);