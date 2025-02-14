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

//Task 3: Arrow Function

//Write an arrow function that applies a discount
let calculateLoyaltyDiscount = (amount, years) => {
    let discountPercent = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;
    let discountedPrice = amount - (amount * discountPercent);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};

//Log to the console and test data
console.log(calculateLoyaltyDiscount(100, 6));
console.log(calculateLoyaltyDiscount(200, 2));