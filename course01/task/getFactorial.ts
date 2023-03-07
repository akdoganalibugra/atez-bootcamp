// course01 task01
// Could you write a function that calculates the factorial?

function isInteger(n: number): boolean {
    // @ts-ignore
    return Number.isInteger(n);
}

function isNonNegative(n: number): boolean {
    return n >= 0;
}

function factorial(n: number): number {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function getFactorial(num: any): number | string {
    try {
        if (isNaN(num)) {
            throw new Error("Error: input must be a number");
        }
        if (!isInteger(num)) {
            throw new Error("Error: input must be an integer");
        }
        if (!isNonNegative(num)) {
            throw new Error("Error: input must be non-negative");
        }
        if (num === 0) {
            return 1;
        }
        return factorial(num);
    } catch (error) {
        return error.message;
    }
}

console.log(getFactorial(3)); // Output: 6
console.log(getFactorial(0)); // Output: 1
console.log(getFactorial(-5)); // Output: Error: input must be non-negative
console.log(getFactorial(4.5)); // Output: Error: input must be an integer
console.log(getFactorial("hello")); // Output: Error: input must be a number
console.log(getFactorial(null)); // Output: Error: input must be a number
console.log(getFactorial(undefined)); // Output: Error: input must be a number
console.log(getFactorial({})); // Output: Error: input must be a number
console.log(getFactorial([])); // Output: Error: input must be a number
