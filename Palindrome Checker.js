/* QUESTION 
Return true if the given string is a palindrome. 
Otherwise, return false.

A palindrome is a word or sentence that's spelled 
the same way both forward and backward, ignoring 
punctuation, case, and spacing.


*/ 


// GUESS

function palindrome(str) {
	var ESCAPE_CHARS = /[\\.+*_,?\^$\[\](){}\s+\/'#]/g;
  var noScores = /[-]/;
	var removedEscape = str.replace(ESCAPE_CHARS,'');
	var newStr = removedEscape.toLowerCase();
  var final = newStr.replace(noScores, '');
	console.log(final); 
	var splitString = final.split("")
	var reverseArray = splitString.reverse(); 
  var splitArray = reverseArray.join('');
	console.log(splitString);
	console.log(reverseArray); 
  console.log(splitArray); 
	if (final === splitArray) {
		return true; 
	} else {
		return false; 
	}
}



palindrome("almostomla");
palindrome("1 eye for of 1 eye.");
palindrome("A man, a plan, a canal. Panama");
palindrome("0_0 (: /-\ :) 0-0"); 
palindrome("My age is 0, 0 si ega ym.");
palindrome("2_A3*3#A2");








// ACTUAL 

function palindrome(str) {
      return str.replace(/[\W_]/g, '').toLowerCase() ===
             str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
    }
/* WHAT YOU LEARNED 


SO CLOSE! Passed all test but one... 



*/ 
