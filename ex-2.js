//Exercise 2: Valid Palindrome

// const isPalindrome = function (s) {
//   //Start Coding here
// };

const isPalindrome = (sentence) => {
  const toRegular = sentence.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reverseSentence = toRegular.split("").reverse().join("");
  return toRegular === reverseSentence;
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
