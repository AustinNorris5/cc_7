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

//Task 4: Parameters and Arguments

//Write a function to calculate shipping fees
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost;
    let ratePerPound;

    if (location === "USA") {
        baseCost = 5;
        ratePerPound = 0.5;
    } else if (location === "Canada") {
        baseCost = 10;
        ratePerPound = 0.7;
    }
//Expedited shipping: additional $10 fee
    let totalCost = baseCost + (weight * ratePerPound);
    if (expedited) {
        totalCost += 10;
    }

    return `Shipping Cost: $${totalCost.toFixed(2)}`;
};

//Log to the console and test data
console.log(calculateShippingCost(10, "USA", true));
console.log(calculateShippingCost(5, "Canada", false));

//Task 5: Returning Values

//Write a function that returns total interest
function calculateLoanInterest(principle, rate, years) {
    let interest = principle * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
};

//Log to the console and test data
console.log(calculateLoanInterest(1000, 0.05, 3));
console.log(calculateLoanInterest(5000, 0.07, 5));

//Task 6: Higher-Order Functions

//Declare an array with ata leats five amounts
let transactions = [500, 1200, 3000, 800, 2200];
function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
};

//Log to the console and test data
let highValueTransactions = filterHighValueTransactions (transactions, amount => amount > 1000);
console.log(`High Value Transactions: ${highValueTransactions}`)

//Task 7: Closures

//Write a function that returns another function to add expenses and keep a running balance
function createBudgetTracker() {
    let balance = 0;
    return function(expense) {
        balance -= expense;
        return `Current Balance: -$${balance}`
    };
};

//Log to the console and test data
let budget = createBudgetTracker();
console.log(budget(300));
console.log(budget(200));

//Task 8: Recursion in JavaScript

//Write a recursive function that projects revenue growth
function calculateGrowth(years, revenue) {
//Each year increases revenue by 5% until reaching year 10
    if (years >= 10) return revenue;
    return calculateGrowth(years + 1, revenue * 0.05);
};

//Log to the console and test data
console.log(`Projected Revenue: $${calculateGrowth(8, 1000).toFixed(2)}`);
console.log(`Projected Revenue: $${calculateGrowth(5, 5000).toFixed(2)}`);