// 1. Deposite some Money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user Won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();

const deposite = () => {
    while(true){
        const depositeAmount = prompt("Enter a deposite amount: ");
        const numberDepositeAmount = parseFloat(depositeAmount);

        if(isNaN(numberDepositeAmount) || numberDepositeAmount <= 0){
            console.log("Invalid deposite amount, try again.");
        } else {
            return numberDepositeAmount;
        }
    }
};

const getNumberofLines = () => {
    while(true){
        const lines = prompt("Enter number of lines: ");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid number of lines\n");
        } else {
            return numberOfLines;
        }
    }
}
const depositeAmount = deposite();
const numberOfLines = getNumberofLines();
console.log(depositeAmount);
