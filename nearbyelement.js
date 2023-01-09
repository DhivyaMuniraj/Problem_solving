let input_arr = [1, 10, 7, 2, 4, 9];
const nearbyNumber = 5;
//   1st approach
/*
 * Get an input
 * Create an function
 * declare a variable that holds the lowest difference
 * run the loop
 * compare the previous difference with current difference and store in a lowest difference variable
 * Finally subtract the nearbyelement with lowest diffrence
 * return the function
 */

function nearestNumber(nearbyNumber, input_arr) {
  let difference;
  let lowest_difference = input_arr[0];
  for (let i = 0; i < input_arr.length; i++) {
    result = Math.abs(nearbyNumber - input_arr[i]);
    if (difference < lowest_difference) {
      lowest_difference = difference;
    }
  }
  return nearbyNumber - lowest_difference;
}
console.log(nearestNumber(nearbyNumber, input_arr));

// 2 nd approach using reduce

function nearestNumber(nearbyNumber, input_arr) {
let result = input_arr.reduce((prev, current) =>
  Math.abs(nearbyNumber - current) < Math.abs(nearbyNumber - prev)?current: prev)
 return result
};
console.log(nearestNumber(nearbyNumber, input_arr) );
