/* QUESTION 


Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.


*/ 


// GUESS
function sumPrimes(num) {
		var store  = [], i, j, primes = [];
		for (i = 2; i <= num; ++i) {
			if (!store [i]) {
				primes.push(i);
				for (j = i << 1; j <= num; j += i) {
					store[j] = true; 
				}
			}
		}
		primes.pop();
		var primeArray = primes - 1; 
		var sum = 0; 
		for (var i = 0; i < primeArray.length; i++) {
			sum += primeArray[i]
		}
		return sum; 
	}    
	

// ACTUAL 
function sumPrimes(num) {
	function isPrime(number) {
		for (var i = 2; i <= number; i++) {
			if (number % i === 0 && number != i) {
				return false; 
			}
		}
		return true; 
	}
	if (num === 1) {
		return 0; 
	} if (isPrime(num) === false) {
		return sumPrimes(num - 1); 
	} 
	if (isPrime(num) === true) {
		return num + sumPrimes(num - 1);
	}
}

/* WHAT YOU LEARNED 






*/ 
