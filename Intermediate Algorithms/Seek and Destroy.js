//You will be provided with an initial array (the first argument in the destroyer function), 
//followed by one or more arguments. 
//Remove all elements from the initial array that are of the same value as these arguments.

//GUESS
function destroyer(arr) {
  // Remove all the values
  // for loop
  // if it matches the values outside of the [], remove it and put in
  // new array
  var newArr = []; 
  function deleteThis(first) {
    for (var i = 1; i <= first.length; i++) {
      if (arr[0][i] != arr[i]) {
        newArr.push([i]);
      }
    }
  }
  return newArr;
}

// Actual 
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}


/* WHAT I LEARNED

slice the first thing, and then return if it the argument incldues the value. 



*/ 
