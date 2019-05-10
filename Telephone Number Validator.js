/* QUESTION 


Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long 
as it has the format of a valid US number. The following are examples 
of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
*/ 


// GUESS
/*
1. Identify the problem (expected output, expected input, rules) 

Input: 
- 10 - 11 numbers with dashes
- 10 numbers


- groups of 3 and then last is four 

- Group of 3

const regex = /(?:[0-9]{3})/;
const str = ``;
let m;

if ((m = regex.exec(str)) !== null) {
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}

- first three numbers may be bracketed

Output: True / False 
Rules (no maybe - solid rules here) 
- True when it is in groups of three, seperated by one dash or one space
- True when the first three numbers are bracketed
- Middle three numbers are always together
- Last four numbers are always together
- If 11 numbers, then the 1 has to be first

2. Potential Pitfalls 
- Having dashes/spaces in weird places (E.g., after the second number)
var wSpaces = /\d\d\d/;
var wDashes = //; 

- Can it be the same number? for all numbers? 
- Brackets not closed
- Cannot be ALL bracketed 
- No other signs except for dashes, spaces and numbers 

3. Approach (steps, in order) 
- At least more than 9 numbers
WORKS: 
function checkTens(str) { 
  if (str.length < 10) {
    console.log(false);
  }
}


//10 
// if 10 characters, make sure they are all numbers (otherwise, return false) 
checkLength("5555555555");
var regex = /^[0-9]{10}$/g;

function checkIfTens(str) {
  var tTen = /^[0-9]{10}$/;
  if (str.match(tTen)) {
    console.log(true);
  } else {
    console.log(false); 
  }
}


//11
//if 11, make sure all numbers, otherwise, return false
checkLength("15555555555");

function checkEleven(str) { 
  var check11 = /^1[0-9]{10}$/;
  if (str.match(check11)) {
    console.log(true);
  } else {
    console.log(false); 
  }
}

//12
if 12, make sure the first it starts with a number or a bracket

function sNumber(str) { 
  var sNumber = /^1/;
  if (str.match(sNumber)) {
    console.log(true);
  } else {
    console.log(false); 
  }
}

function sBracket(str) { 
  var sBracket = /^[(][0-9]{3}[)]/;
  if (str.match(sBracket)) {
    console.log(true);
  } else {
    console.log(false); 
  }
}


//12 
function checkTwelve(str) {
  var check12a = /(^[0-9][0-9]{2}[-][0-9]{3}[-][0-9]{3}[0-9]$)/
  var check12b = /(^[0-9][0-9]{2}\s[0-9]{3}\s[0-9]{3}[0-9]$)/
  var check12c = /(^[(][0-9]{3}[)][0-9]{6}[0-9]$)/
  if (str.length === 12 && ((str.match(check12a)) || (str.match(check12b)) || (str.match(check12c)))) {
      console.log(true);
    } else {
      console.log(false);
    } 
  } 


then make sure there is all numbers after
checkLength("555-555-5555");
(^[0-9][0-9]{2}[-][0-9]{3}[-][0-9]{3}[0-9]$)

checkLength("555 555 5555");
(^[0-9][0-9]{2}\s[0-9]{3}\s[0-9]{3}[0-9]$)

checkLength("(555)5555555");
(^[(][0-9]{3}[)][0-9]{6}[0-9]$)


//13
function checkThirteen(str) {
  var check13 = /(^[(][0-9]{3}[)][0-9]{3}[-][0-9]{3}[0-9]$)/
  if (str.length === 13 && str.match(check13)) {
      console.log(true);
    } else {
      console.log(false);
    } 
  } 


if 13, needs to start with paranthesis 
checkLength("(555)555-5555");
(^[(][0-9]{3}[)][0-9]{3}[-][0-9]{3}[0-9]$)

//14

function checkFourteen(str) {
  var check14a = /(^[(][0-9]{3}[)]\s[0-9]{3}[-][0-9]{3}[0-9]$)/
  var check14b = /(^1\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}[0-9]$)/
  var check14c = /(^1[(][0-9]{3}[)][0-9]{3}[-][0-9]{3}[0-9]$)/
  var check14d = /(^1\s[0-9]{3}[-][0-9]{3}[-][0-9]{3}[0-9]$)/
  var check14e = /(^1[-][0-9]{3}[-][0-9]{3}[-][0-9]{3}[0-9]$)/
  if (str.length === 14) {
    if ((str.match(check14a)) || (str.match(check14b)) || (str.match(check14c)) || (str.match(check14d)) || (str.match(check14e))) {
      console.log(true);
    } 
    } else {
      console.log(false); 
    } 
  } 


checkLength("(555) 555-5555");
(^[(][0-9]{3}[)]\s[0-9]{3}[-][0-9]{3}[0-9]$)

if starts with one, needs to be followed by dash or space; 
checkLength("1 555 555 5555");
(^1\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}[0-9]$)

checkLength("1(555)555-5555");
(^1[(][0-9]{3}[)][0-9]{3}[-][0-9]{3}[0-9]$)

checkLength("1 555-555-5555");
(^1\s[0-9]{3}[-][0-9]{3}[-][0-9]{3}[0-9]$)

checkLength("1-555-555-5555");
(^1[-][0-9]{3}[-][0-9]{3}[-][0-9]{3}[0-9]$)


//16

function checkSixteen(str) {
  var check16a = /(^1\s[(][0-9]{3}[)]\s[0-9]{3}[-][0-9]{3}[0-9]$)/
  var check14b = /(^1\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}[0-9]$)/
  var check14c = /(^1[(][0-9]{3}[)][0-9]{3}[-][0-9]{3}[0-9]$)/
  var check14d = /(^1\s[0-9]{3}[-][0-9]{3}[-][0-9]{3}[0-9]$)/
  var check14e = /(^1[-][0-9]{3}[-][0-9]{3}[-][0-9]{3}[0-9]$)/
  if ((str.length === 16) && (str.match(check16a))) {
      console.log(true);
    } else {
      console.log(false); 
    } 
  } 


if one, needs to have one, and then space 
checkLength("1 (555) 555-5555");
(^1\s[(][0-9]{3}[)]\s[0-9]{3}[-][0-9]{3}[0-9]$)


4. Coding (break it into pieces and test each piece)


*/
function checkTen(str) {
  var tTen = /^[0-9]{10}$/;
  if (str.match(tTen)) {
    console.log(true);
  } else {
    console.log(false); 
  }
}

function checkEleven(str) { 
  var check11 = /^1[0-9]{10}$/;
  if (str.match(check11)) {
    console.log(true);
  } else {
    console.log(false); 
  }
}

function checkTwelve(str) {
  var check12a = /(^[0-9][0-9]{2}[-][0-9]{3}[-][0-9]{3}[0-9]$)/
  var check12b = /(^[0-9][0-9]{2}\s[0-9]{3}\s[0-9]{3}[0-9]$)/
  var check12c = /(^[(][0-9]{3}[)][0-9]{6}[0-9]$)/
  if (str.length === 12 && ((str.match(check12a)) || (str.match(check12b)) || (str.match(check12c)))) {
      console.log(true);
    } else {
      console.log(false);
    } 
  } 


function checkThirteen(str) {
  var check13 = /(^[(][0-9]{3}[)][0-9]{3}[-][0-9]{3}[0-9]$)/
  if (str.length === 13 && str.match(check13)) {
      console.log(true);
    } else {
      console.log(false);
    } 
  } 


function checkFourteen(str) {
  var check14a = /(^[(][0-9]{3}[)]\s[0-9]{3}[-][0-9]{3}[0-9]$)/
  var check14b = /(^1\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}[0-9]$)/
  var check14c = /(^1[(][0-9]{3}[)][0-9]{3}[-][0-9]{3}[0-9]$)/
  var check14d = /(^1\s[0-9]{3}[-][0-9]{3}[-][0-9]{3}[0-9]$)/
  var check14e = /(^1[-][0-9]{3}[-][0-9]{3}[-][0-9]{3}[0-9]$)/
  if (str.length === 14) {
    if ((str.match(check14a)) || (str.match(check14b)) || (str.match(check14c)) || (str.match(check14d)) || (str.match(check14e))) {
      console.log(true);
    } 
    } else {
      console.log(false); 
    } 
  } 


function checkSixteen(str) {
  var check16a = /^(1\s?)?(([(]\d{3}[)])|([-]?\d{3}[-]?)|(\s?\d{3}\s?))\s?[-]?\d{3}\s?[-]?\d{4}$/
  if ((str.length === 16) && (str.match(check16a))) {
      console.log(true);
    } else {
      console.log(false); 
    } 
  } 

checkSixteen("1 (555) 555-5555");
checkSixteen("555-555-5555");
checkSixteen("555 555 5555");
checkSixteen("(555)5555555");
checkSixteen("(555)555-5555");
checkSixteen("(555) 555-5555");

checkSixteen("1 555 555 5555");

checkSixteen("1(555)555-5555");

checkSixteen("1 555-555-5555");

checkSixteen("1-555-555-5555");


a(b|c) 


// ACTUAL 
function telephoneCheck(str) {
  var check = /^(1\s?)?(([(]\d{3}[)])|([-]?\d{3}[-]?)|(\s?\d{3}\s?)|\d{3})\s?[-]?\d{3}\s?[-]?\d{4}$/;
  if ((str.length) >= 10 && str.match(check)) {
    return true; 
  } else {
    return false; 
  }
}
/* WHAT YOU LEARNED 






*/ 
