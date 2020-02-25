
//Given an array of objects of names and ages find the oldest age and return it.
//Example:
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

//--> returns 34
//*/
var findOldestAge = function(array) {
    var currentMax = 0;
    for(i = 0; i < array.length; i++){
        if(array[i].age > currentMax){
            currentMax = array[i].age;
        }
    }
    return currentMax;
  };

var maxAge = findOldestAge(myArr);

console.log(maxAge);
  
  // // Uncomment and copy into Chrome dev console to test your function!
  // var myArr = [
  //   {
  //     name: "Bill",
  //     age: 34
  //   },
  //   {
  //     name: "Derek",
  //     age: 16
  //   }
  // ];
  // console.log(findOldestAge(myArr));