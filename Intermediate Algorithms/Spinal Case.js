/* QUESTION 





*/ 


// GUESS
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var replace1 = /\s+|_+/g;
  var original = str.replace(replace1, '-');
  var remove = original.trim().toLowerCase();
}



// ACTUAL 
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores and join with dash
  return str.toLowerCase().split(/(?:_| )+/) .join('-');
}


/*

*/ 
