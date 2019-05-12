checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], 
["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

const CASH 

function checkCashRegister (price, cash, cid) {
	let cashRegister = { status: '', change: cid};
	const changeNeeded = parseFloat(cash-price).toFixed(2);
	const changeAvailable = getTotalCashRegisterChange(cid); 
	console.log(changeNeeded)
	cashRegister.status = getCashRegisterStatus(changeNeeded, changeAvailable);

	if(cashRegister.status === REGISTER_STATUS.insufficientFunds) {
		cashRegister.change = [];
		return cashRegister; 
	}

	cashRegister.change = getCustomersChange(changeNeeded, cid);

	console.log(cashRegister.status); 
}

function getTotalCashRegisterStatus(changeNeeded, changeAvailable) {
	if (Number(changeNeeded) > Number(changeAvailable)) {
		return REGISTER_STATUS.insufficientFunds;
	}
	if (Number(changeNeeded) > Number(changeAvailable)) {
		return REGISTER_STATUS.open; 
	}
	return REGISTER_STATUS.closed; 
}

function getTotalCashRegisterChange(changeInDrawer) {
	let total = 0;

	for (let change of changeInDrawer) {
		let changeValue = change[1];
		total += changeValue; 
	}
	return total.toFixed(2); 
}


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





// ACTUAL 


/* WHAT YOU LEARNED 






*/ 
