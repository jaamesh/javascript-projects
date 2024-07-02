//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.
function getMinValue(array) {
    let minValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (minValue > array[i]) {
            minValue = array[i];
        }
    }
    return minValue;
}

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

let arrayToCheck = nums3;
console.log(`Minimum Value from ${arrayToCheck}: ${getMinValue(arrayToCheck)}`);

// Function that sorts an array from smallest to largest using getMinValue from part 1
function sortArrayAsc(array) {
    let sortedArray = [];
    let minValue;
    while (array.length > 0) {
        minValue = getMinValue(array);
        sortedArray.push(minValue);
        console.log("Sorted Array: " + sortedArray);
        array.splice(array.indexOf(minValue),1);
        console.log("Original Array: " + array);
    }
    return sortedArray;
}

let arrayToSort = nums2;
//console.log(`Sorted Array ${sortArrayAsc(arrayToSort)} from Original Array ${arrayToSort}`);

//arrayToSort = [-2, 0, -10, -44, 5, 3, 0, 3];
//console.log (arrayToSort.sort(function (a,b) {a-b;}));


function sortRecursively(srcArray) {
    if (srcArray.length === 0) {
        return [];
    } else {
        let minValue = getMinValue(srcArray);
        srcArray.splice(srcArray.indexOf(minValue),1);
        let nextArray = sortRecursively(srcArray);
        console.log(nextArray);
        nextArray.unshift(minValue);
        return nextArray;
    }
}

console.log(`Sorted Array ${sortRecursively(arrayToSort)} from Original Array ${arrayToSort}`);
