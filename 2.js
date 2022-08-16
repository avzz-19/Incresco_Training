let list1=['carrot', 'tomato','cucumber','cabbage','potato'];
let list2=['orange', 'red', 'green' ,'green','brown'];
let veg='potato';
function color(veg)
{
   for(let i=0;i<list1.length;i++){
       if(veg==list1[i])
       {
           return(list2[i]);
       }
   }
}
console.log(color(veg));
