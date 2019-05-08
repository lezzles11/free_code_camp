// Compare two arrays and return a new array with any items only
// found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.

//GUESS

function diffArray(arr1, arr2) {
  var newArr = [];
  arr1 = arr1.toString().split(',').map(Number);
  arr2 = arr2.toString().split(',').map(Number);
  for (var i in arr1) {
    if (arr2.indexOf(arr1[i]) === -1)
    newArr.push(arr1[i]);
  }
  for (i in arr2) {
    if (arr1.indexOf(arr2[i]) === -1)
    newArr.push(arr2[i]);
  }
  return newArr.sort((x,y) => x-y);
}

// ACTUAL ANSWER 
 function diffArray(arr1, arr2) {
      var newArr = [];

      function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
        for (var i=0;i<first.length;i++) {
          if (second.indexOf(first[i]) === -1) {
            // Pushing the elements unique to first to newArr
            newArr.push(first[i]);
          }
        }
      }

      onlyInFirst(arr1, arr2);
      onlyInFirst(arr2, arr1);

      return newArr;
    }

    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);