//Algorithms (Advanced) 
//Intermediate Algorithm Scripting: Sum All Numbers in a Range
//We'll pass you an array of two numbers. 
//Return the sum of those two numbers plus the sum of all the numbers between them.

//initial guess 
 function sumAll(arr) {
  for (var i = 0; i <= arr.length; i++) {
    let total = total + arr[i];
  } let total = total + Math.max(arr) + Math.min(arr);
  return total; 
}

//actual 
function sumAll(arr) {
  // find the max and min first 
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var result = 0; 
  // add final = final + array[i]
  for (var i = min; i <= max; i++){
    result += i; 
  }
  return(result); 
}