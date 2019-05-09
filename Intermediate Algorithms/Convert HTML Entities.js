/* QUESTION 

Convert HTML Entities
Convert the characters &, <, >, " (double quote), and 
' (apostrophe), in a string to their corresponding HTML entities.

convertHTML('Stuff in "quotation marks"') 
should return Stuff in &​quot;quotation marks&​quot;.
*/ 


// GUESS
function convertHTML(str) {
  //loop through string
  // if the string matches a thing, convert it
  for (var i = 0; i <= str.length; i++) {
    if (str[i] === '<') {
      str[i].replace('<', '&lt;');
      continue; 
    } else if (str[i] === '&') {
      str[i].replace('&', '&amp;');
      continue; 
    } else if (str[i] === `"`) {
      str[i].replace('"', '&quot;');
      continue; 
    } else if (str[i] === `'`) {
      str[i].replace("'", "&quot;");
      continue; 
    } else if (str[i] === '>') {
      str[i].replace('>', '	&gt;');
    } else {
      return str; 
    }
  }
  // &colon;&rpar;
  return str;
}


// ACTUAL 
    function convertHTML(str) {
      // Split by character to avoid problems.

      var temp = str.split('');

      // Since we are only checking for a few HTML elements I used a switch

      for (var i = 0; i < temp.length; i++) {
        switch (temp[i]) {
          case '<':
            temp[i] = '&lt;';
            break;
          case '&':
            temp[i] = '&amp;';
            break;
          case '>':
            temp[i] = '&gt;';
            break;
          case '"':
            temp[i] = '&quot;';
            break;
          case "'":
            temp[i] = "&apos;";
            break;
        }
      }

      temp = temp.join('');
      return temp;
    }

    //test here
    convertHTML("Dolce & Gabbana");

/* WHAT YOU LEARNED 






*/ 
