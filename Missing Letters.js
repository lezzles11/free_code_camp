/* QUESTION 

Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

fearNotLetter("abce") should return "d".

*/ 


// GUESS

function fearNotLetter(str) {
  // match the string with the alphabet
  // if it is not sequential, print out missing letter
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  if (str[0] === alphabet[i]) {
    //match sequence
    console.log(str.charAt(alphabet[i]));
    
  }
}

// ACTUAL 


function fearNotLetter(str) {
	// loop through the string 
	for (var i = 0; i < str.length; i++) {
		//input it into a new variable 
		var code = str.charCodeAt(i);
		// if the code does not equal the sequence 
		if (code !== str.charCodeAt(0) + i) {
			//return the letter 
			return String.fromCharCode(code - 1);
		}
	}
	return undefined; 
}
/* WHAT YOU LEARNED 






*/ 
