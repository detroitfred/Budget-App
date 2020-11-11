// selectors 
let updateBudgetButton = document.querySelector("#Update_Budget");
let addExpenseButton = document.querySelector("#Add_Expense");
let monthlyBudget = document.querySelector("#Monthly_Budget");
let incomeInput = document.querySelector("#Income_Input");
let remainingBalance = document.querySelector("#Remaining_Balance");
let amountInput = document.querySelector("#Amount_Input");
let nameInput = document.querySelector("#Name_Input");
let expenseList = document.querySelector("#Expense_List");
let totalExpenses = document.querySelector("#Total_Expenses");

// events
updateBudgetButton.onclick = updateBudget;
addExpenseButton.onclick = addExpense;

// variables
let monthlyIncome = 0;
let expenses = [];
let expenseTotal = 0;
let balance = 0;

// functions
function updateBudget(event){
    event.preventDefault();
    monthlyIncome = incomeInput.value;
    monthlyBudget.innerText = "$" + monthlyIncome;
    incomeInput.value = "";
    updateBalance();
}


function updateBalance() {
    balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = "$" + balance;
    if (balance < 0) {
        remainingBalance.classList.remove("green");
        remainingBalance.classList.add("red");
    } else {
        remainingBalance.classList.remove("red");
        remainingBalance.classList.add("green");
    }
}

function addExpense(event) {
    event.preventDefault();
    let expense = {
        expenseName: nameInput.value,
        expenseAmount: amountInput.value
    }
    let newExpense = document.createElement("p");
    newExpense.innerText = expense.expenseName + ": $" + expense.amountInput;
    expenses.push(expenseAmount);
    expenseList.appendChild(newExpense);
    expenseAmount = parseInt(amountInput.value);
    nameInput.value = "";
    amountInput.value = "";
    updateExpenseTotal();
}


function updateExpenseTotal() {
    expenseTotal = 0;
    //initalExpression; condition; incrementExpression
    for (let i = 0; i < expenses.length; i++) {
        expenseTotal = expenseTotal + expenses[i];
    }
    totalExpenses.innerText = "$" + expenseTotal;
    updateBalance();
}