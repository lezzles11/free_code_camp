/* QUESTION 





*/ 


// GUESS

function stringToBinary(str, spaceSeparatedOctets) {
    function zeroPad(num) {
        return "00000000".slice(String(num).length) + num;
    }

    return str.replace(/[\s\S]/g, function(str) {
        str = zeroPad(str.charCodeAt().toString(2));
        return !1 == spaceSeparatedOctets ? str : str + " "
    });
};

// ACTUAL 

function binaryAgent(str) {
      biString = str.split(' ');
      uniString = [];

    /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

      for(i=0;i < biString.length;i++){
        uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
      }

      // we then simply join the string
      return uniString.join('');
    }
/* WHAT YOU LEARNED 






*/ 
