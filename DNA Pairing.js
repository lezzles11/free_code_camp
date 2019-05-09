/* QUESTION 





*/ 


// GUESS
function pairElement(str) {
  for (var i = 0; i <= str.length; i++) {
    newArray = [];
    if (str[i] === 'A') {
      newArray.push("['A', 'T']");
    } else if (str[i] === 'G') {
      newArray.push("['G', 'C']");
    } else if (str[i] === 'C') {
      newArray.push("['C', 'G']");
    } else if (str[i] === 'T') {
      newArray.push("['T', 'A']");
    } 
  }
  return newArray;
}

pairElement("GCG");


// ACTUAL  
function pairElement(str) {
      // Return each strand as an array of two elements, the original and the pair.
      var paired = [];

      // Function to check with strand to pair.
      var search = function(char) {
        switch (char) {
          case 'A':
            paired.push(['A', 'T']);
            break;
          case 'T':
            paired.push(['T', 'A']);
            break;
          case 'C':
            paired.push(['C', 'G']);
            break;
          case 'G':
            paired.push(['G', 'C']);
            break;
        }
      };

      // Loops through the input and pair.
      for (var i = 0; i < str.length; i++) {
        search(str[i]);
      }

      return paired;
    }

    // test here
    pairElement("GCG")


/* WHAT YOU LEARNED 






*/ 
