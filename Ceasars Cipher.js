/* QUESTION 
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
*/ 


// GUESS
/*
1. Identify the problem (expected output, expected input, rules) 

Input: a letter
Output: a letter that is 13 places away (replacing the letter in the string)
RULES (no bending rules!):
- Spaces should translate to spaces
- Fullstops / puncutation should also not be changed

2. Research 
- .replace: var newString = oldString.replace("A", "X");
- .split and then .replace and then .join : var newString = oldString.split(''); 

3. Potential Pitfalls 
- Not looping through each alphabet 
- Don't need to break 
- 

4. Approach (clear steps)
- Switch and case 

4a. Sub-Task Approach

5. Coding (break it into pieces and test each piece)
*/

function rot13(str) { // LBH QVQ VG!
  var s = str.toUpperCase().split('');
  for (var i = 0; i < s.length; i++) {
      // Caesar cipher
      switch(s[i]) {
        case 'A':
          s[i] = 'N';
          break;
        case 'B':
          s[i] = 'O';
          break;
        case 'C':     
          s[i] = 'P';
          break;
        case 'D':
          s[i] = 'Q';
          break;
        case 'E':     
          s[i] = 'R';
          break;
        case 'F':
          s[i] = 'S';
          break;
        case 'G':     
          s[i] = 'T';
          break;
        case 'H':
          s[i] = 'U';
          break;
        case 'I':     
          s[i] = 'V';
          break;
        case 'J':
          s[i] = 'W';
          break;
        case 'K':     
          s[i] = 'X';
          break;
        case 'L':
          s[i] = 'Y';
          break;
        case 'M':     
          s[i] = 'Z';
          break;
        case 'N':
          s[i] = 'A';
          break;
        case 'O':     
          s[i] = 'B';
          break;
        case 'P':
          s[i] = 'C';
          break;
        case 'Q':     
          s[i] = 'D';
          break;
        case 'R':
          s[i] = 'E';
          break;
        case 'S':     
          s[i] = 'F';
          break;
        case 'T':
          s[i] = 'G';
          break;
        case 'U':     
          s[i] = 'H';
          break;
        case 'V':
          s[i] = 'I';
          break;
        case 'W':     
          s[i] = 'J';
          break;
        case 'X':
          s[i] = 'K';
          break;
        case 'Y':
          s[i] = 'L';
          break;
        case 'Z':     
          s[i] = 'M';
          break;
        case '!':     
          s[i] = '!';
          break;
        case ' ':     
          s[i] = ' ';
          break;
        case '.':     
          s[i] = '.';
          break;
        case '?':     
          s[i] = '?';
          break;
        case ',':     
          s[i] = ',';
          break;
        default:
          s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
      }
  }
  console.log(s.join(''));
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!")
rot13("SERR YBIR?")
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")



// ACTUAL 


/* WHAT YOU LEARNED 






*/ 
