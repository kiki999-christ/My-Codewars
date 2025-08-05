/*You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 
1
+
7
+
12
=
20
1+7+12=20
Note
If there is nothing to sum, the sum is default to 0.
*/
let arr=[1, -4, 7, 12];
function positiveSum(arr) {
  return arr.filter (a => a >= 0 ).reduce ((a,b) => a + b , 0);
}
console.log(positiveSum(arr));