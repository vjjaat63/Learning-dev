function removeduplicate(arr) {
    let num2 = [];  // array to store the repetition times of an element
    let num3 = []   // final ans

    for (let i = 0; i < arr.length; i++) {
        if (num2[arr[i]] == undefined)
            num2[arr[i]] = 1;
        else
            num2[arr[i]]++;
    }

    for (let j = 0; j < num2.length; j++) {
        if (num2[j] > 0) {
            num3.push(j);
        }
    }
    return num3;
}

let arr = [1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 5]
let ansarr = removeduplicate(arr);
console.log(ansarr.length, ansarr);