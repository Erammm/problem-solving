
function isRangeContained(arr, A, B) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < A || arr[i] > B) {
            return false;
        }
    }
    return true;
}
const N = 7;
const A = 2;
const B = 5;
const arr = [1, 4, 5, 2, 7, 8, 3];


const result = isRangeContained(arr, A, B);

if (result) {
    console.log("All elements are within the specified range.");
} else {
    console.log("Not all elements are within the specified range.");
}
