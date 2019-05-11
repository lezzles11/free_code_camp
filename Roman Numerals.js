/* QUESTION 





*/ 


// GUESS
/*
1. Identify the problem (expected output, expected input, rules) 

Input: Number 

Output: Roman Numeral 

RULES (no bending rules!):
- Each roman numeral has a decimal value 
- You started with zero and add each symbol's value to get a total 
- Read left to right 
- if the value of the current symbol is less than the symbol that follows it, 
subtract the current symbols'v alue from the next symbol's value
and add it to the result 
(e.g., XIV
X (10) > I (1) so, add 10 to the total
I (1) < V (5) so subtract 1 from 5 = |-4|
10 + 4 = 14)
- Letter can only repeat three times (e.g., III) 

2. Research 
Bubble sort? 
- Arrays 


3. Potential Pitfalls 
- Identifying the number's position (e.g., I and XIX are completely different)
- If the number on the left is greater, you have to add the totals from 
right to left (e.g., XXIV - 
10 + 10 + 1 - 5 = 24)

4. Approach (clear steps)
- Used the Ceasars Cipher stuff to do this problem... let's see if it works
(NOPE!)
- Turning the number into 
- Object key and values (identifying each one) using an array
- Identfying the index of the number (e.g., how many numbers are there?)
- 

4a. Sub-Task Approach
- Adding the numbers together if they are the same or if the left is
greater than the right

- If there right numeral is bigger than the left, then subtract

- Letter can only repeat three times


- 

5. Coding (break it into pieces and test each piece)

6. Resources Used: 
- Printed out roman numerals worksheet
- http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-merge-sort-algorithm/
- https://codeburst.io/useful-javascript-array-and-object-methods-6c7971d93230

*/


const romanNumerals = {I = 1, IV = 4, V = 5, XI = 9, X = 10, L = 50, C = 100, D = 500, M = 1000};
let bubbleSort


function testTens(num) {
	if (num < 10) {
		

	}
}

// ACTUAL 


/* WHAT YOU LEARNED 






*/ 
