function getLength(a) {
    let count = 0;
    for (const i of a) {
        if (Array.isArray(i)) {
            count += getLength(i);
        } else {
            ++count;
        }
    }
    return count;
 }
 let arr=[1, [2, [3, [4, [5, 6]]]]];
 console.log(getLength(arr));
 