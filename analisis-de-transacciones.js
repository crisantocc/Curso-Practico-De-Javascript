// Excercise : Transaction analysis

const transsactions = [
    { id: 1, description: 'Grocery Shoping', amount: -50},
    { id: 2, description: 'Salary Deposit', amount: 2000},
    { id: 3, description: 'Utility Bill Payment', amount: -100},
    { id: 4, description: 'Online Purchase', amount: -30},
]

// 1. Calculate Total Balance

const totalBalance = transsactions.reduce((acc, transaction) => acc + transaction.amount,0)
console.log('Total Balance ', totalBalance)

