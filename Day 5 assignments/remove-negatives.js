// Debug the following code that removes negative values from an array

function removeNegatives(arr) { // removed the var
    for(var i=0; i<arr.length; i++) { //chanfed the <= with <
        if(arr[i] < 0) {
            arr.splice(i,1); // i changed the pop with splice
        }// removed the i--
    }
    return arr; // the array with arr
}
var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
console.log(result);