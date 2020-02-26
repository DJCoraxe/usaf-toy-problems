/*

Write a function that, given a string, returns the number of vowels in that string.

We will consider that a, e, i, o and u are vowels for the sake of this problem.

Ex:

vowelCounter("Banana")
--> Returns 3
vowelCounter("Hawaii")
--> Returns 4

 */

 var vowelCounter = function(string) {
  var uppercaseString = string.toUpperCase();
  var numVowels = 0;
  var stringArray = uppercaseString.split("");

  stringArray.map(letter => {
    if(letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U'){
      numVowels++;
    }
  })
  return numVowels;
};

console.log(vowelCounter('Apple'));


// console.log(vowelCounter("Banana"))
