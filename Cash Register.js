/* QUESTION 
Design a cash register drawer function checkCashRegister() that accepts 
purchase price as the first 
argument (price), payment as the second argument (cash), and
 cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an 
object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if 
cash-in-drawer is less than the change due, or if you 
cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer 
as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the 
change due in coins and bills, sorted in highest to lowest order, 
as the value of the change key.

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], 
["ONE HUNDRED", 100]]) should return 
{status: "OPEN", change: [["QUARTER", 0.5]]}.
*/ 


// GUESS


function checkCashRegister(price, cash, cid) {
  // subtract second item from first 
  // try to return the biggest bill first, and then find the next number to return 
  var change = cash - price; 
  let money = {
  	"PENNY": 0.01,
  	"NICKEL": 0.05, 
  	"DIME": 0.1,
  	"QUARTER": 0.25, 
  	"ONE": 1.0,
  	"FIVE": 5.0, 
  	"TEN": 10.0, 
  	"TWENTY": 20.0, 
  	"ONE HUNDRED": 100
  }
  if (change === 0) {
  	return "no change";
  } else if (change )
  
  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], 
["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);


*/ 


// ACTUAL 


/* WHAT YOU LEARNED 






*/ 
