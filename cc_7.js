//Task 1: Function Declaration

//Write a function that calculates the final invoice amount.
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    return `Total Invoice: $${total.toFixed(2)}`;
};

//Log to the console and test data
console.log(calculateInvoice(100, 0.08, 5));
console.log(calculateInvoice(500, 0.1, 20));