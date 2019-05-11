/* QUESTION 


Check if the predicate (second argument) 
is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. 
The predicate pre will be an object property and you need to return 
true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when
evaluated in a Boolean context.

Remember, you can access object properties through either dot notation
 or [] notation.
*/ 
/* QUESTION 





*/ 


// GUESS
/*
1. Identify the problem (expected output, expected input, rules) 

Input: 
Output: 
RULES (no bending rules!):
- (output) when...
- (output) when...

2. Research 
Truthy = '0' 'false' [] {}
if (true)
if ({})
if ([])
if (42)
if ("0")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)

3. Potential Pitfalls 
(e.g., )

4. Approach (clear steps)
- Loop through each of the collection
var length = collection.length(); 
for (var i = 0; i <= length; i++) {

}


- Identify the key that matches the “pre” in the collection  
function isTruthy(element, index, array) {
  return 
}
var find = collection.find(function(pre) {
  if (element === ) {
    return true;  
}); 
- if Pre is either ‘truthy’ for all of them 
- Return true 
- Else, return false 

4a. Sub-Task Approach
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

5. Coding (break it into pieces and test each piece)

6. Resources Used: 
https://www.sitepoint.com/javascript-truthy-falsy/
https://developer.mozilla.org/en-US/docs/Glossary/Truthy
http://www.objectplayground.com/
https://crunchify.com/how-to-iterate-through-jsonarray-in-javascript/
*/
function testTruthyFalsy (val)
{
    return val ? console.log('truthy') : console.log('falsy');
}


var dictionary = {
    "employee1":[
        {"id":"0","name":"Google"},
        {"id":"1","name":"eBay"}
    ],
    "employee2": [
        {"id":"2","name":"Yahoo"},
        {"id":"3","name":"Facebook"}
    ]
};

var employee1 = dictionary.employee1;
var employee2 = dictionary.employee2;
 
  for ( var i in employee1) {
    var id = employee1[i].id;
    var name = employee1[i].name;
    console.log(id);
    console.log(name);
  }
 
  for ( var i in employee2) {
    var id = employee2[i].id;
    var name = employee2[i].name;
    console.log(id);
    console.log(name);
  }

var graph = {
    "sparkData" : [ {
      "one" : [ 97, 5, 69, 35, 28, 52, 51, 55 ]
    }, {
      "two" : [ 96, 63, 18, 55, 13, 47, 77, 64 ]
    }, {
      "three" : [ 94, 75, 83, 44, 43, 86, 68, 26 ]
    } ]
  }


  for ( var i = 0; i < graph.sparkData.length; i++) {
    var obj = graph.sparkData[i];
    console.log(obj);
    var crunchifyName;
    var crunchifyValue;
 
    document.writeln("<td>");
    document.writeln("<table border='0'  width=100 >");
 
    for ( var key in obj) {
      crunchifyName = key;
      crunchifyValue = obj[key].toString();
      +document.writeln("<tr><td><B>" + crunchifyName
          + ":  </B></td><td width=50>" + crunchifyValue
          + "</td></tr>");
      document.writeln("</table>");
      document.writeln("</td>");
 
    }
  }

ObjectKit.forEach = function Object_forEach (object, callback) {
  for (var key in object) {
    if (object.hasOwnProperty(key)) callback(key, object[key]);
  }
};

var anotherObject = {
  a: 2
};

var myObject = Object.create( anotherObject, {
  b: {
    enumerable: false,
    writable: true,
    configurable: false,
    value: 3
  },
  c: {
    enumerable: true,
    writable: false,
    configurable: false,
    value: 4
  }
} );

myObject.hasOwnProperty( "a" ); // false
myObject.hasOwnProperty( "b" ); // true
myObject.hasOwnProperty( "c" ); // true

myObject.a; // 2
myObject.b; // 3
myObject.c; // 4


// ACTUAL 


/* WHAT YOU LEARNED 






*/ 


// GUESS
function truthCheck(collection, pre) {
  // Is everyone being true?
  for (var i = 0; i <= collection.length; i++) {
      console.log(collection[i][pre]);
      if (collection[i][pre] === true) {
        return true; 
      } else {
        return false;
      }
      
  }
  
  return pre;
}
// 


// ACTUAL 
function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}



/* WHAT YOU LEARNED 






*/ 
