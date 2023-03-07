function multiply(...args: number[]): number {
    let result = 1;
    for (const arg of args) {
        if (isNaN(arg)) {
            throw new Error(`Error: ${arg}: ${typeof arg} must be a number`);
        }
        if (arg === 0) {
            return 0;
        }
        result *= arg
    }
    return result;
}

function exampleUsage() {
    try {
        console.log(multiply(2, 3, 4)); // Output: 24
        console.log(multiply(5, 10)); // Output: 50
        console.log(multiply(1, 2, 3, 4, 5)); // Output: 120
        // console.log(multiply(2, '3', 4)); // Throws an error
    } catch (error) {
        console.error(error);
    }
}

exampleUsage();