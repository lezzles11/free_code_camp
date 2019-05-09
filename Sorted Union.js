/* QUESTION 

Write a function that takes two or more arrays and returns a 
new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be 
included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, 
but the final array should not be sorted in numerical order.

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]

*/ 


// GUESS
function uniteUnique(arr) {
  // identify everything in the array
  // push it into a new array if it's not already in the array
for (var i = 0; i <= arr.length; i++) {
    if (arr[i] != newArr) {
      var code = arr[i];
      newArr.push(code);
    }
  }
  console.log(newArr);

function uniteUnique(arr) {
  // identify everything in the array
  // push it into a new array if it's not already in the array
  var splited = arr.concat(); 
  var newArr = []; 
  splited.forEach(function(item) {
    if (splited[item] != newArr) {
      newArr.push(item)
    }
  });
  console.log(newArr);
}



// ACTUAL 
function uniteUnique(arr) {
  var args = [...arguments];
  var result = [];
  for(var i = 0; i < args.length; i++) {
    for(var j = 0; j < args[i].length; j++) {
       if(!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


function uniteUnique(arr) 


/* WHAT YOU LEARNED 






*/ 
