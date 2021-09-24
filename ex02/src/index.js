// Only change code below this line
function myCounter(n){
    var countArray = [];
    if (n < 1) {
        return [];
    } else {
        countArray = myCounter(n - 1);
        countArray.unshift(n);
    }
    return countArray;
}
// Only change code above this line

console.log(myCounter(-1));  // Change this line
console.log(myCounter(10));
console.log(myCounter(5));
module.exports = myCounter;