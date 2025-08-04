/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/
let str = "Dermatoglyphics";
function isIsogram(str){
  str = str.toLowerCase();
  const seen = {};

  for (let char of str) {
    if (seen[char]) {
      return false;
    }
    seen[char] = true;
  }

  return true;
}
console.log(isIsogram(str));