// This function takes all the numbers from 0 - a users input number and
// adds each number to next until the user number is reached.

function getSum(num) {
var sum = 0

    for (var i = 0; i <= num; i++) {
        sum += i; 
    }
    return sum;
}