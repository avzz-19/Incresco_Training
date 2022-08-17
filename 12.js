function setUnionOfAnyAmountOfSets(){
let args=Array.from(arguments);
let union = new Set([...args[0], ...args[1], ...args[2]]);
console.log(union);
}
const  Set1 = new Set([3,4,5])
 const Set2 = new Set([6,5,3])
 const Set3 = new Set([3,9,6])

setUnionOfAnyAmountOfSets(Set1, Set2, Set3);
