//Task 1: Function Declaration

//Write a function that calculates the final invoice amount
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    return `Total Invoice: $${total.toFixed(2)}`;
};

//Log to the console and test data
console.log(calculateInvoice(100, 0.08, 5));
console.log(calculateInvoice(500, 0.1, 20));

//Task 2: Function Expression

//Declare a function expression that calculates hourly wage
let calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};

//Log to the console and test data
console.log(calculateHourlyWage(52000, 40));
console.log(calculateHourlyWage(75000, 35));

