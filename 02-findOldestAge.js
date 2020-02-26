/*
Given an array of objects of names and ages find the oldest age and return it.

Example:

var myArr = [
  {
    name: "Bill",
    age: 34
  },
  {
    name: "Derek",
    age: 16
  }
];

findOldestAge(myArr);
--> returns 34

*/




var findOldestAge = function(array) {
  var maxAge = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[0].age > maxAge) {
      maxAge = array[0].age;
    }
  }
  return maxAge;
};

// // Uncomment and copy into Chrome dev console to test your function!
var myArr = [
  {
    name: "Bill",
    age: 34
  },
  {
    name: "Derek",
    age: 16
  }
];
console.log(findOldestAge(myArr));

