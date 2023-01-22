/*
* create a function
* run the loop
* using replaceAll replace the word double quotes
* finally check if string is equal to double quotes return true else false
*/

function word_break(str, data) {
  for (let i of data) {
    str = str.replaceAll(i, "");
 
  }

  if (str === "") {
    return true;
  } else {
    return false;
  }
}
console.log(word_break("leetcode",["leet","code"]));

