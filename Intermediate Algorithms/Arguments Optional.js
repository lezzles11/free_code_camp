/* QUESTION 
Create a function that sums two arguments together. 
If only one argument is provided, then return a 
function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) 
should return a function.

Calling this returned function with a single argument will 
then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.
*/ 

// GUESS
/*
1. Identify the problem (expected output, expected input, rules) 

Input: however many numbers
Output: adding all the arguments together 
Rules: 
- Argument can be together or seperated (e.g., (2, 3) and (2) (3) both work )
- However, they can't be a string and a number (e.g., (2, "3") and (2) ([3]) will not work)
- Can't be not a number 

2. Potential Pitfalls 
(e.g., )
- Adding together everything and being okay
- Need to set parameters 

3. Approach 
- Splicing the array first?  

Sub-Task Approach


4. Coding (break it into pieces and test each piece)


*/
// GUESS
function addTogether(x, y) {
	if (((isNan)x) || ((isNan)y)) {
		return false; 
	} else {
		sum = 0; 
		sum = sum + x + y; 
		console.log(sum); 
}


addTogether(2,3);

 function addTogether() {
      var args = new Array(arguments.length);
      //Storing the arguments in an array
      for(var i = 0; i < args.length; ++i) {
          args[i] = arguments[i];
        }
     //Check for the arguments length
     if(args.length == 2){
        //If there are two arguments,check for the type of both arguments
        //Use typeof to check the type of the argument(both should be numbers)
        if(typeof args[0] !== 'number' || typeof args[1] !=='number' ){
          return undefined;
          }
        return args[0]+args[1];
       }
     //When only one argument is provided
     if(args.length == 1){
         a= args[0];
         //Check the  argument using typeof 
        if(typeof a!=='number'){
            return undefined;
          }
        else{
           //Making use of closures 
           return function(b){
           //Checking the second argument 
             if(typeof b !=='number'){
               return undefined;
               }
             else
               return a+b;
              };
          }
        }
    }



addTogether(2,3);

// ACTUAL 
    //jshint esversion: 6
    function addTogether() {
      var args = Array.from(arguments);
      return args.some(n => typeof n !== 'number') ? 
        undefined: 
        args.length > 1 ?
          args.reduce((acc, n) => acc += n, 0):
          (n) => typeof n === "number" ? 
            n + args[0]:
            undefined;
    }

    // test here
    addTogether(2,3);

/* WHAT YOU LEARNED 






*/ 



// ACTUAL 


/* WHAT YOU LEARNED 






*/ 
